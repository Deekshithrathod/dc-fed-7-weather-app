import { useRecoilValue, useSetRecoilState } from "recoil";
import SearchResult from "./SearchResult/SearchResult";
import "./SearchResults.css";
import { searchResults } from "../../../../atoms/search";
import { weatherState } from "../../../../atoms/weather";
import { fiveDayPredictionState } from "../../../../atoms/fiveDayWeather";
import asyncFetchTodayData, {
  asyncFetchFiveDaysData,
} from "../../../../utils/fetchData";
import { getCompleteURL } from "../../../../utils/urlMaker";

const SearchResults = ({ setShowSearch }: { setShowSearch: Function }) => {
  const results = useRecoilValue(searchResults);

  const setWeather = useSetRecoilState(weatherState);
  const setFiveDayForecast = useSetRecoilState(fiveDayPredictionState);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const divEl = target.closest(".search-result") as HTMLDivElement;
    if (!divEl) {
      return;
    }
    const lon = parseInt(divEl.dataset.lon || "0");
    const lat = parseInt(divEl.dataset.lat || "5");

    (async () => {
      const fiveDayData = await asyncFetchFiveDaysData(
        getCompleteURL(lat, lon, "forecast")
      );
      setFiveDayForecast(fiveDayData);
      const todayData = await asyncFetchTodayData(
        getCompleteURL(lat, lon, "weather")
      );
      setWeather(todayData);
    })();

    setShowSearch(false);
  };

  return (
    <div className="search-results" onClick={handleClick}>
      {results.map((res, index) => (
        <SearchResult {...res} key={index} />
      ))}
    </div>
  );
};

export default SearchResults;
