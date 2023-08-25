import axios from "axios";
import { IWeather, defaultWeatherData } from "../atoms/weather";
import { IDay } from "../components/Main/Fiveday/Day/Day";
import { ISearchResult } from "../components/Sidepane/SearchConsole/SearchResults/SearchResult/SearchResult";
import getFileNameFromDesc from "./imageFinder";

const asyncFetchTodayData = async (URL: string): Promise<IWeather> => {
  let ret: IWeather = defaultWeatherData;
  const res = await fetch(URL);
  const data = await res.json();
  const newWeatherData: IWeather = {
    temperature: data.main.temp,

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

export const getDateFromSeconds = (seconds: number) => {
  return new Date(seconds).toLocaleDateString("en-gb", {
    month: "short",
    day: "numeric",
    weekday: `short`,
  });
};

export const asyncFetchFiveDaysData = async (URL: string): Promise<IDay[]> => {
  let ret: IDay[] = [];

  const res = await axios.get(URL);
  const data = await res.data;

  const fivDays = data.list.slice(0, 5);
  let i = 0;
  fivDays.forEach(
    (day: {
      dt: number;
      weather: { main: string };
      main: { temp_max: number; temp_min: number };
    }) => {
      ++i;
      const newDayData: IDay = {
        date: getDateFromSeconds(Date.now() + 60 * 60 * 24 * 1000 * i),
        icon: getFileNameFromDesc(day.weather.main),
        tempHigh: day.main.temp_max,
        tempLow: day.main.temp_min,
      };
      ret.push(newDayData);
    }
  );

  return ret;
};

export const asyncGetSearchResults = async (
  URL: string
): Promise<ISearchResult[]> => {
  const res = await fetch(URL, {
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  });

  const data = await res.json();

  let retVal: ISearchResult[] = [];

  data.forEach(
    (searchResult: {
      lat: any;
      lon: any;
      name: any;
      country: any;
      state: any;
    }) => {
      const res: ISearchResult = {
        lat: searchResult.lat,
        lon: searchResult.lon,
        name: searchResult.name,
        country: searchResult.country,
        state: searchResult.state,
      };
      retVal.push(res);
    }
  );

  return retVal;
};

export default asyncFetchTodayData;
