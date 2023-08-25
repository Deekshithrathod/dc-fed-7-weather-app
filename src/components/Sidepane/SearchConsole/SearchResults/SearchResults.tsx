import { useRecoilValue, useSetRecoilState } from "recoil";
import SearchResult from "./SearchResult/SearchResult";
import "./SearchResults.css";
import { searchResults } from "../../../../atoms/search";
import { coodsState } from "../../../../atoms/coordinates";

const SearchResults = ({ setShowSearch }: { setShowSearch: Function }) => {
  const results = useRecoilValue(searchResults);
  const setCoods = useSetRecoilState(coodsState);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const divEl = target.closest(".search-result") as HTMLDivElement;
    if (!divEl) {
      return;
    }
    const lon = parseInt(divEl.dataset.lon || "0");
    const lat = parseInt(divEl.dataset.lat || "5");

    setCoods({ lat, lon });
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
