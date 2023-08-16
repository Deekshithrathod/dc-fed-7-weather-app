import "./SearchResult.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface ISearchResult {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

const SearchResult = ({ lat, lon, country, state, name }: ISearchResult) => {
  return (
    <div className="search-result" data-lat={lat} data-lon={lon}>
      <span>
        {name}, {state} ({country})
      </span>
      <ChevronRightIcon />
    </div>
  );
};

export default SearchResult;
