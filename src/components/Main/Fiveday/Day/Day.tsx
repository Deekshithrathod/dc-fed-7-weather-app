import { useRecoilValue } from "recoil";
import { tempUnit, tempUnitState } from "../../../../atoms/temperatureUnits";
import "./Day.css";

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
          {Math.round(tempHigh)}
          {tempUnit}
        </div>
        <div className="temp-low">
          {Math.round(tempLow)}
          {tempUnit}
        </div>
      </div>
    </div>
  );
};

export default Day;
