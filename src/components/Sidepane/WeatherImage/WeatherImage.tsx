import { useRecoilValue } from "recoil";
import "./WeatherImage.css";
import { weatherDescState } from "../../../atoms/weather";
import getFileNameFromDesc from "../../../utils/imageFinder";

const WeatherDisplay = () => {
  const desc = useRecoilValue(weatherDescState);

  return (
    <div className="weather-img-container">
      <div className="bg-container">
        <img src="Cloud-background.png" className="bg-weather-img" />
      </div>
      <img
        src={`${getFileNameFromDesc(desc)}.png`}
        className="main-weather-img"
      />
    </div>
  );
};

export default WeatherDisplay;
