import DateRow from "./DateRow/DateRow";
import Location from "./Location/Location";
import Temparature from "./Temparature/Temparature";
import WeatherDesc from "./WeatherDesc/WeatherDesc";
import "./WeatherMeta.css";

const WeatherMeta = () => {
  return (
    <div className="weather-meta">
      <Temparature />
      <WeatherDesc />
      <DateRow />
      <Location />
    </div>
  );
};

export default WeatherMeta;
