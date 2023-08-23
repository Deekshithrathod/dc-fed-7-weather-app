import { useRecoilValue } from "recoil";
import { tempUnit, tempUnitState } from "../../../../atoms/temperatureUnits";
import "./Day.css";
import { getTempFromKelvin } from "../../../../utils/tempCalculator";

export interface IDay {
  date: string;
  icon: string;
  tempHigh: number;
  tempLow: number;
}

const Day = ({ date, icon, tempHigh, tempLow }: IDay) => {
  const tempUnit: tempUnit = useRecoilValue(tempUnitState);

  return (
    <div className="day">
      <div className="date">{date}</div>
      <div className="weather-predicted-image">
        <img src={`${icon}.png`} alt={icon} />
      </div>
      <div className="temp-range">
        <div className="temp-high">
          {getTempFromKelvin(tempHigh, tempUnit).toFixed(1)}
          {tempUnit}
        </div>
        <div className="temp-low">
          {getTempFromKelvin(tempLow, tempUnit).toFixed(1)}
          {tempUnit}
        </div>
      </div>
    </div>
  );
};

export default Day;
