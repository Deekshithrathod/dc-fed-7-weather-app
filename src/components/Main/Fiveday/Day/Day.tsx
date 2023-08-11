import "./Day.css";

interface IDay {
  date: string;
  icon: string;
  tempHigh: number;
  tempLow: number;
}

const Day = () => {
  return (
    <div className="day">
      <div className="date">Tomorrow</div>
      <div className="weather-predicted-image">
        <img src="Thunderstorm.png" alt="Thunderstorm" />
      </div>
      <div className="temp-range">
        <div className="temp-high">16°C</div>
        <div className="temp-low">11°C</div>
      </div>
    </div>
  );
};

export default Day;
