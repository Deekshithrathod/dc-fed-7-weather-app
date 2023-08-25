import { selector } from "recoil";
import asyncFetchTodayData, {
  asyncFetchFiveDaysData,
} from "../utils/fetchData";
import { getCompleteURL } from "../utils/urlMaker";
import { coodsState } from "./coordinates";
import { fiveDayPredictionState } from "./fiveDayWeather";
import { weatherState } from "./weather";

const latestFiveDataData = selector({
  key: "latestFiveDataData",
  get: async ({ get }) => {
    const fiveDayData = get(fiveDayPredictionState);
    return fiveDayData;
  },
  set: async ({ set, get }) => {
    const { lat, lon } = get(coodsState);
    const fiveDayData = await asyncFetchFiveDaysData(
      getCompleteURL(lat, lon, "forecast")
    );
    set(fiveDayPredictionState, fiveDayData);
  },
});

const latestWeatherData = selector({
  key: "latestWeatherData",
  get: async ({ get }) => {
    const weather = get(weatherState);
    return weather;
  },
  set: async ({ set, get }) => {
    const { lat, lon } = get(coodsState);
    const weather = await asyncFetchTodayData(
      getCompleteURL(lat, lon, "weather")
    );
    set(weatherState, weather);
  },
});
