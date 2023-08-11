import { atom } from "recoil";

export const coodsState = atom({
  key: "coodsState",
  default: {
    lat: 28.65195,
    lon: 77.23149,
  },
});
