import "./Highlights.css";
import NavigationIcon from "@mui/icons-material/Navigation";

const Highlights = () => {
  return (
    <div className="highlights">
      <h2>Today's highlights</h2>
      <div className="cards-container">
        <div className="card ">
          <h3>Wind Status</h3>
          <div className="value">
            7<span>mph</span>
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
            84<span>%</span>
          </div>
          <div className="humidity">
            <div className="milestones">
              <div>0</div>
              <div>50</div>
              <div>100</div>
            </div>
            <progress id="humidity" value="82" max="100">
              82%
            </progress>
            <div className="progress-unit">%</div>
          </div>
        </div>
        <div className="card">
          <h3>Visibility</h3>
          <div className="value">
            6,4<span> miles</span>
          </div>
        </div>
        <div className="card">
          <h3>Air Pressure</h3>
          <div className="value">
            998<span> mb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
