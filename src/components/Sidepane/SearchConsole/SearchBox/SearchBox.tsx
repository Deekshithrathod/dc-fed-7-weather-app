import { useState } from "react";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  const [loc, setLoc] = useState("");

  const handleClick = () => {
    console.log(`searchButtonClicked`);
  };

  return (
    <div className="input-container">
      <div className="input-box">
        <SearchIcon sx={{ padding: "0.75rem" }} />
        <input
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          type="text"
          name="location"
          id="location"
          placeholder="search location"
        />
      </div>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBox;
