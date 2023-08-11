import { useRecoilValue } from "recoil";
import Day from "./Day/Day";
import "./Fiveday.css";
import { fiveDayPredictionState } from "../../../atoms/fiveDayWeather";

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
