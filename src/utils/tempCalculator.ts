import { tempUnit } from "../atoms/temperatureUnits";

export const getTempFromKelvin = (
  tempInKelvin: number,
  unitToConvertInto: tempUnit
) => {
  if (unitToConvertInto === "°C") {
    return tempInKelvin - 273;
  }

  return 32 + 1.8 * (tempInKelvin - 273);
};
