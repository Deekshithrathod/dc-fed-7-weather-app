import { useRecoilValue } from "recoil";
import "./WeatherImage.css";
import { weatherDescState } from "../../../atoms/weather";

const WeatherDisplay = () => {
  const desc = useRecoilValue(weatherDescState);

  const imageFileName = desc
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase())
    .join("");
  return (
    <div className="weather-img-container">
      <img src="Cloud-background.png" className="bg-weather-img" />
      <img src={`${imageFileName}.png`} />
    </div>
  );
};

export default WeatherDisplay;
