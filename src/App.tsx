import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { coodsState } from "./atoms/coordinates";
import { weatherState } from "./atoms/weather";
import asyncFetchTodayData, { asyncFetchFiveDaysData } from "./utils/fetchData";
import { fiveDayPredictionState } from "./atoms/fiveDayWeather";
import { getCompleteURL } from "./utils/urlMaker";
import Search from "./pages/Search/Search";

function App() {
  const { lat, lon } = useRecoilValue(coodsState);

  const setWeather = useSetRecoilState(weatherState);
  const setFiveDayForecast = useSetRecoilState(fiveDayPredictionState);

  useEffect(() => {
    (async () => {
      const fiveDayData = await asyncFetchFiveDaysData(
        getCompleteURL(lat, lon, "forecast")
      );
      const todayData = await asyncFetchTodayData(
        getCompleteURL(lat, lon, "weather")
      );

      setWeather(todayData);
      setFiveDayForecast(fiveDayData);
    })();
  }, []);

  return (
    <div className="app-container">
      <Search />
      <Home />
    </div>
  );
}

export default App;
