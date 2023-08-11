import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { coodsState } from "./atoms/coordinates";
import { weatherState } from "./atoms/weather";

function App() {
  const coods = useRecoilValue(coodsState);
  const setWeather = useSetRecoilState(weatherState);

  useEffect(() => {
    // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coods.lat}&lon=${coods.lon}&appid=b52fd4b268ccf78fb1a2d9dec99a5ddf`;
    // fetch(URL)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     console.log(`sflkajsf;lakjsfl;kajs;l`);
    //     setWeather(data);
    //   });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
