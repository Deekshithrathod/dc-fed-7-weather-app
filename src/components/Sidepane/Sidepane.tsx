import "./Sidepane.css";
import GpsFixedSharpIcon from "@mui/icons-material/GpsFixedSharp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Sidepane = () => {
  return (
    <div className="sidepane">
      <nav>
        <button>Search for places</button>
        <button>
          <GpsFixedSharpIcon sx={{ fontSize: "1.25rem" }} />
        </button>
      </nav>
      <div className="container">
        <div className="weather-img-container">
          <img src="Cloud-background.png" className="bg-weather-img" />
          <img src="Shower.png" />
        </div>
        <div className="weather-meta">
          <div className="weather-temp">
            15<span>°C</span>
          </div>
          <div className="weather-type">Shower</div>
          <div className="weather-day">
            <div className="relative">Today</div>
            <span>.</span>
            <div className="date">Fri 5, Jun</div>
          </div>
          <div className="weather-location">
            <LocationOnIcon sx={{ color: "#88869d" }} /> Helsinki
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepane;
