import { tempUnit, tempUnitState } from "../../../../../atoms/temperatureUnits";
import { temperatureState } from "../../../../../atoms/weather";
import "./Temparature.css";
import { useRecoilValue } from "recoil";

export interface ITemparature {
  temperature: number;
}

const Temparature = () => {
  const temp = useRecoilValue(temperatureState);
  const tempUnit: tempUnit = useRecoilValue(tempUnitState);

  return (
    <div className="weather-temp">
      {temp}
      <span>{tempUnit}</span>
    </div>
  );
};

export default Temparature;
