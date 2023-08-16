import "./Display.css";

import WeatherDisplay from "./WeatherImage/WeatherImage";
import WeatherMeta from "./WeatherMeta/WeatherMeta";
import Navbar from "./Navbar/Navbar";

const Display = ({ setShowSearch }: { setShowSearch: Function }) => (
  <>
    <Navbar setShowSearch={setShowSearch} />
    <div className="container">
      <WeatherDisplay />
      <WeatherMeta />
    </div>
  </>
);

export default Display;
