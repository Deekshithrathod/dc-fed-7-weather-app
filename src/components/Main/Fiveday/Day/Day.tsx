import "./Day.css";

export interface IDay {
  date: string;
  icon: string;
  tempHigh: number;
  tempLow: number;
}

const Day = ({ date, icon, tempHigh, tempLow }: IDay) => {
  return (
    <div className="day">
      <div className="date">{date}</div>
      <div className="weather-predicted-image">
        <img src={`${icon}.png`} alt={icon} />
      </div>
      <div className="temp-range">
        <div className="temp-high">{tempHigh.toFixed(2)}°C</div>
        <div className="temp-low">{tempLow.toFixed(2)}°C</div>
      </div>
    </div>
  );
};

export default Day;
