import { atom } from "recoil";

export type tempUnit = "°C" | "°F";

export const tempUnitState = atom<tempUnit>({
  key: `tempUnitState`,
  default: "°C",
});
