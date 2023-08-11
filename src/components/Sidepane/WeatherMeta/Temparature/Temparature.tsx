import "./Temparature.css";
import { useRecoilValue } from "recoil";
import { temperatureState } from "../../../../atoms/weather";

export interface ITemparature {
  temperature: number;
}

const Temparature = () => {
  const temp = useRecoilValue(temperatureState);
  return (
    <div className="weather-temp">
      {temp}
      <span>°C</span>
    </div>
  );
};

export default Temparature;
