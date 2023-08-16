import SearchResult from "./SearchResult/SearchResult";
import "./SearchResults.css";

const SearchResults = () => {
  return (
    <div className="search-results">
      {/* {searchResults.map((res, index) => (
    <SearchResult {...res} key={index} />
  ))} */}
      <SearchResult
        lat={5}
        lon={4}
        state="UK"
        name={"China"}
        country={"Delhi"}
      />
      <SearchResult
        lat={5}
        lon={4}
        state="UK"
        name={"China"}
        country={"Delhi"}
      />
    </div>
  );
};

export default SearchResults;
