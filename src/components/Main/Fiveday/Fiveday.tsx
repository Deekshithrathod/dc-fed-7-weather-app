import "./Fiveday.css";
import { useRecoilValue } from "recoil";
import { fiveDayPredictionState } from "../../../atoms/fiveDayWeather";
import Day from "./Day/Day";

const Fiveday = () => {
  const fiveDayPrediction = useRecoilValue(fiveDayPredictionState);
  return (
    <div className="fiveday-container">
      {fiveDayPrediction.map((day, index) => (
        <Day {...day} key={index} />
      ))}
    </div>
  );
};

export default Fiveday;
