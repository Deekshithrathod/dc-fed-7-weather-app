import { useState } from "react";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";
import { asyncGetSearchResults } from "../../../../utils/fetchData";
import { getCompleteURL } from "../../../../utils/urlMaker";
import { useSetRecoilState } from "recoil";
import { searchResults } from "../../../../atoms/search";

const SearchBox = () => {
  const [loc, setLoc] = useState("");
  const setLocSearchResults = useSetRecoilState(searchResults);

  const handleClick = () => {
    // search using the OpenWeather API & update the searchResultsState
    const updateSearchResults = async () => {
      try {
        const data = await asyncGetSearchResults(
          getCompleteURL(0, 0, "search", loc)
        );
        setLocSearchResults(data);
      } catch (err) {
        console.error(err);
      }
    };
    updateSearchResults();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    var id = event.key;

    if (id === "Enter") {
      handleClick();
    }
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
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
      </div>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBox;
