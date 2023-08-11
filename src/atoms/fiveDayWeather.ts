import { atom } from "recoil";
import { IDay } from "../components/Main/Fiveday/Day/Day";

export const defaultFiveDayPrediction: IDay[] = [
  {
    date: "Today",
    tempHigh: 13,
    tempLow: 10,
    icon: "Thunderstorm",
  },
  {
    date: "Fri, 5 Jun",
    tempHigh: 15,
    tempLow: 12,
    icon: "HeavyRain",
  },
  {
    date: "Sat, 6 Jun",
    tempHigh: 17,
    tempLow: 13,
    icon: "LightRain",
  },
  {
    date: "Sun, 7 Jun",
    tempHigh: 19,
    tempLow: 15,
    icon: "HeavyCloud",
  },
  {
    date: "Monday, 8 Jun",
    tempHigh: 27,
    tempLow: 23,
    icon: "LightCloud",
  },
];

export const fiveDayPredictionState = atom<IDay[]>({
  key: "fiveDayPredictionState",
  default: defaultFiveDayPrediction,
});
