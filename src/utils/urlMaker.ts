const BASE_URL = `https://api.openweathermap.org`;
const API_KEY = `b52fd4b268ccf78fb1a2d9dec99a5ddf`;
const WEATHER_PATH = `data/2.5`;
const LOC_SEARCH_PATH = `geo/1.0`;

export const getCompleteURL = (
  lat: number,
  lon: number,
  type: "weather" | "forecast" | "search",
  location?: string
) => {
  if (type === "search") {
    return `${BASE_URL}/${LOC_SEARCH_PATH}/direct?&appid=${API_KEY}&q=${location}`;
  }
  return `${BASE_URL}/${WEATHER_PATH}/${type}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};
