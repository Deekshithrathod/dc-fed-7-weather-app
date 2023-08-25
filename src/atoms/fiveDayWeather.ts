import { atom } from "recoil";
import { IDay } from "../components/Main/Fiveday/Day/Day";

export const defaultFiveDayPrediction: IDay[] = [
  {
    date: "Today",
    tempHigh: 273 + 13,
    tempLow: 273 + 10,
    icon: "Thunderstorm",
  },
  {
    date: "Fri, 5 Jun",
    tempHigh: 273 + 15,
    tempLow: 273 + 12,
    icon: "HeavyRain",
  },
  {
    date: "Sat, 6 Jun",
    tempHigh: 273 + 17,
    tempLow: 273 + 13,
    icon: "LightRain",
  },
  {
    date: "Sun, 7 Jun",
    tempHigh: 273 + 19,
    tempLow: 273 + 15,
    icon: "HeavyCloud",
  },
  {
    date: "Monday, 8 Jun",
    tempHigh: 273 + 27,
    tempLow: 273 + 23,
    icon: "LightCloud",
  },
];

export const fiveDayPredictionState = atom<IDay[]>({
  key: "fiveDayPredictionState",
  default: defaultFiveDayPrediction,
});
