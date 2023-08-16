import { useSetRecoilState } from "recoil";
import "./Navbar.css";
import GpsFixedSharpIcon from "@mui/icons-material/GpsFixedSharp";
import { coodsState } from "../../../../atoms/coordinates";

const Navbar = ({ setShowSearch }: { setShowSearch: Function }) => {
  const setCoods = useSetRecoilState(coodsState);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: {
    coords: { latitude: number; longitude: number; accuracy: number };
  }) {
    setCoods({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    });
  }

  function handleError(err: { code: any; message: any }) {
    console.log(err);
  }

  const handleClick = () => {
    console.log(`getLocation is clicked`);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, handleError, options);
    }
  };

  return (
    <nav>
      <button
        onClick={() => {
          setShowSearch(true);
        }}>
        Search for places
      </button>
      <button onClick={handleClick}>
        <GpsFixedSharpIcon sx={{ fontSize: "1.25rem" }} />
      </button>
    </nav>
  );
};

export default Navbar;
