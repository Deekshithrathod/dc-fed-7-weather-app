import "./Highlights.css";
import { useRecoilValue } from "recoil";
import NavigationIcon from "@mui/icons-material/Navigation";
import { todayHighlightsState } from "../../../atoms/weather";

export interface ITodayHighligths {
  windSpeed: number;
  windDirection: number;

  humidity: number;

  visibility: number;

  pressure: number;
}

const Highlights = () => {
  const { windSpeed, humidity, visibility, pressure }: ITodayHighligths =
    useRecoilValue(todayHighlightsState);
  return (
    <div className="highlights">
      <h2>Today's highlights</h2>
      <div className="cards-container">
        <div className="card ">
          <h3>Wind Status</h3>
          <div className="value">
            {windSpeed}
            <span>kmph</span>
          </div>
          <div className="wind">
            <NavigationIcon
              sx={{
                backgroundColor: "grey",
                borderRadius: `50%`,
                padding: ".25rem",
                fontSize: "1rem",
              }}
            />
            WSW
          </div>
        </div>
        <div className="card ">
          <h3>Humidity</h3>
          <div className="value">
            {humidity}
            <span>%</span>
          </div>
          <div className="humidity">
            <div className="milestones">
              <div>0</div>
              <div>50</div>
              <div>100</div>
            </div>
            <progress id="humidity" value={humidity} max="100">
              {humidity}%
            </progress>
            <div className="progress-unit">%</div>
          </div>
        </div>
        <div className="card">
          <h3>Visibility</h3>
          <div className="value">
            {visibility}
            <span> m</span>
          </div>
        </div>
        <div className="card">
          <h3>Air Pressure</h3>
          <div className="value">
            {pressure}
            <span> mb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
