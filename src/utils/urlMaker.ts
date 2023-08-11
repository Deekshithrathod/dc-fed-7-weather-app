const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const API_KEY = `b52fd4b268ccf78fb1a2d9dec99a5ddf`;

export const getCompleteURL = (
  lat: number,
  lon: number,
  type: "weather" | "forecast"
) => {
  return `${BASE_URL}/${type}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};
