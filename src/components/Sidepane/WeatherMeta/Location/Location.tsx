import { useRecoilValue } from "recoil";
import "./Location.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { locationState } from "../../../../atoms/weather";

export interface ILocation {
  place: string;
  country: string;
}

const Location = () => {
  const { place, country } = useRecoilValue(locationState);
  return (
    <div className="weather-location">
      <LocationOnIcon sx={{ color: "#88869d" }} />
      {place}, {country}
    </div>
  );
};

export default Location;
