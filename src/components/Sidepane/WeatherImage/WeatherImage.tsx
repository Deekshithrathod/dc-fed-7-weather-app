import { useRecoilValue } from "recoil";
import "./WeatherImage.css";
import { weatherDescState } from "../../../atoms/weather";
import getFileNameFromDesc from "../../../utils/imageFinder";

const WeatherDisplay = () => {
  const desc = useRecoilValue(weatherDescState);

  return (
    <div className="weather-img-container">
      <img src="Cloud-background.png" className="bg-weather-img" />
      <img src={`${getFileNameFromDesc(desc)}.png`} />
    </div>
  );
};

export default WeatherDisplay;
