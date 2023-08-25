import { atom, selector } from "recoil";
import { ITodayHighligths } from "../components/Main/Highlights/Highlights";
import { ILocation } from "../components/Sidepane/Display/WeatherMeta/Location/Location";
import { ITemparature } from "../components/Sidepane/Display/WeatherMeta/Temparature/Temparature";
import { IWeatherDesc } from "../components/Sidepane/Display/WeatherMeta/WeatherDesc/WeatherDesc";

export interface IWeather
  extends ILocation,
    ITemparature,
    IWeatherDesc,
    ITodayHighligths {}

export const defaultWeatherData: IWeather = {
  desc: "Shower",
  country: "IN",
  place: "Delhi",

  temperature: 273 + 15,

  windSpeed: 12,
  windDirection: 249,

  visibility: 10,

  humidity: 20,

  pressure: 998,
};

export const weatherState = atom<IWeather>({
  key: "weatherState",
  default: defaultWeatherData,
});

export const locationState = selector({
  key: "locationState",
  get: ({ get }): ILocation => {
    const weatherData = get(weatherState);
    return {
      place: weatherData.place,
      country: weatherData.country,
    };
  },
});

export const temperatureState = selector({
  key: "temperatureState",
  get: ({ get }): number => {
    const weatherData = get(weatherState);
    return weatherData.temperature;
  },
});

export const weatherDescState = selector({
  key: "weatherDescState",
  get: ({ get }): string => {
    const weatherData = get(weatherState);
    return weatherData.desc;
  },
});

export const todayHighlightsState = selector({
  key: "todayHighlightsState",
  get: ({ get }): ITodayHighligths => {
    const weatherData = get(weatherState);
    return {
      windSpeed: weatherData.windSpeed,
      windDirection: weatherData.windDirection,

      pressure: weatherData.pressure,

      visibility: weatherData.visibility,

      humidity: weatherData.humidity,
    };
  },
});
