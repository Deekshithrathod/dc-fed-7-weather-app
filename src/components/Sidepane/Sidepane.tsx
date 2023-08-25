import "./Sidepane.css";
import Display from "./Display/Display";
import SearchConsole from "./SearchConsole/SearchConsole";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { coodsState } from "../../atoms/coordinates";
import { weatherState } from "../../atoms/weather";
import asyncFetchTodayData, {
  asyncFetchFiveDaysData,
} from "../../utils/fetchData";
import { getCompleteURL } from "../../utils/urlMaker";
import { fiveDayPredictionState } from "../../atoms/fiveDayWeather";

const Sidepane = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { lat, lon } = useRecoilValue(coodsState);
  const setWeatherState = useSetRecoilState(weatherState);
  const setFiveDayPrediction = useSetRecoilState(fiveDayPredictionState);

  useEffect(() => {
    const updateData = async () => {
      try {
        const weatherData = await asyncFetchTodayData(
          getCompleteURL(lat, lon, "weather")
        );
        setWeatherState(weatherData);
      } catch (err) {
        console.error(err);
      }
      try {
        const fiveDayData = await asyncFetchFiveDaysData(
          getCompleteURL(lat, lon, "forecast")
        );
        setFiveDayPrediction(fiveDayData);
      } catch (err) {
        console.error(err);
      }
    };
    updateData();
  }, [lat, lon]);

  return (
    <div className="sidepane">
      {showSearch ? (
        <SearchConsole setShowSearch={setShowSearch} />
      ) : (
        <Display setShowSearch={setShowSearch} />
      )}
    </div>
  );
};

export default Sidepane;
