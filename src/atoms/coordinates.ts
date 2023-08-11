import { atom } from "recoil";

export interface ICoords {
  lat: number;
  lon: number;
}

export const coodsState = atom<ICoords>({
  key: "coodsState",
  default: {
    lat: 28.65195,
    lon: 77.23149,
  },
});
