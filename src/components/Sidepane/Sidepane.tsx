import "./Sidepane.css";
import Navbar from "./Navbar/Navbar";
import WeatherDisplay from "./WeatherImage/WeatherImage";
import WeatherMeta from "./WeatherMeta/WeatherMeta";

const Sidepane = () => {
  return (
    <div className="sidepane">
      <Navbar />
      <div className="container">
        <WeatherDisplay />
        <WeatherMeta />
      </div>
    </div>
  );
};

export default Sidepane;
