import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tempUnit, tempUnitState } from "../../../atoms/temperatureUnits";
import "./UnitsToggle.css";

const UnitsToggle = () => {
  const unitsList: tempUnit[] = ["°C", "°F"];
  const setTemperatureUnit = useSetRecoilState(tempUnitState);

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className="units-toggle"
      onClick={(e) => {
        console.log(`buttonClicked`);

        if ((e.target as HTMLInputElement).textContent === `°C`) {
          setSelectedIndex(0);
          setTemperatureUnit(`°C`);
        }
        if ((e.target as HTMLInputElement).textContent === `°F`) {
          setSelectedIndex(1);
          setTemperatureUnit(`°F`);
        }
      }}>
      {unitsList.map((unit, i) => {
        return (
          <button key={unit} className={i == selectedIndex ? `selected` : ``}>
            {unit}
          </button>
        );
      })}
    </div>
  );
};

export default UnitsToggle;
