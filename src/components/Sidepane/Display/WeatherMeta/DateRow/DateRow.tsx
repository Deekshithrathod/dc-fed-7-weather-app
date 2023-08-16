import "./DateRow.css";

const DateRow = () => {
  return (
    <div className="weather-day">
      <div className="relative">Today</div>
      <span>.</span>
      <div className="date">
        {new Date().toLocaleDateString("en-gb", {
          month: "short",
          day: "numeric",
          weekday: `short`,
        })}
      </div>
    </div>
  );
};

export default DateRow;
