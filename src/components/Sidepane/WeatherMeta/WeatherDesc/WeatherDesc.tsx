import { useRecoilValue } from "recoil";
import "./WeatherDesc.css";
import { weatherDescState } from "../../../../atoms/weather";

export interface IWeatherDesc {
  desc: string;
}

const WeatherDesc = () => {
  const desc = useRecoilValue(weatherDescState);
  return <div className="weather-desc">{desc}</div>;
};

export default WeatherDesc;
