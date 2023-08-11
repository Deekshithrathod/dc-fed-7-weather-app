import { IWeather, defaultWeatherData } from "../atoms/weather";
import { IDay } from "../components/Main/Fiveday/Day/Day";
import getFileNameFromDesc from "./imageFinder";

const asyncFetchTodayData = async (URL: string): Promise<IWeather> => {
  let ret: IWeather = defaultWeatherData;
  const res = await fetch(URL);
  const data = await res.json();
  const newWeatherData: IWeather = {
    temperature: data.main.temp - 273,

    visibility: data.visibility,

    place: data.name,
    country: data.sys.country,

    pressure: data.main.pressure,

    humidity: data.main.humidity,

    desc: data.weather[0].main,
    windSpeed: data.wind.speed,
    windDirection: data.wind.deg,
  };

  ret = newWeatherData;
  return ret;
};

export const getDateFromEpoc = (epoch: number) => {
  return new Date(epoch).toLocaleDateString("en-gb", {
    month: "short",
    day: "numeric",
    weekday: `short`,
  });
};

export const asyncFetchFiveDaysData = async (URL: string): Promise<IDay[]> => {
  let ret: IDay[] = [];

  const res = await fetch(URL);
  const data = await res.json();
  const fivDays = data.list.slice(0, 5);

  fivDays.forEach(
    (day: {
      dt: number;
      weather: { main: string };
      main: { temp_max: number; temp_min: number };
    }) => {
      const newDayData: IDay = {
        date: getDateFromEpoc(day.dt),
        icon: getFileNameFromDesc(day.weather.main),
        tempHigh: day.main.temp_max - 273,
        tempLow: day.main.temp_min - 273,
      };
      console.log(newDayData);
      ret.push(newDayData);
    }
  );
  console.log(ret);

  return ret;
};

export default asyncFetchTodayData;
