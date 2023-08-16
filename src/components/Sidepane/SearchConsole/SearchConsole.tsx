import CloseIcon from "@mui/icons-material/Close";
import "./SearchConsole.css";
import { useState } from "react";
import asyncFetchTodayData, {
  asyncGetSearchResults,
} from "../../../utils/fetchData";
import { getCompleteURL } from "../../../utils/urlMaker";
import { useRecoilState, useSetRecoilState } from "recoil";
import { showSearchState } from "../../../atoms/search";
import { ICoords, coodsState } from "../../../atoms/coordinates";
import { weatherState } from "../../../atoms/weather";
import CloseBtn from "./CloseBtn/CloseBtn";
import SearchBox from "./SearchBox/SearchBox";
import SearchResults from "./SearchResults/SearchResults";

const SearchConsole = ({ setShowSearch }: { setShowSearch: Function }) => {
  // const defaultSearchResults: ISearchResult[] = [
  //   {
  //     lat: 1,
  //     lon: 2,
  //     name: "London",
  //     country: "GB",
  //     state: "England",
  //   },
  // ];
  // const [isShowSearchPage, setIsShowSearchPage] =
  //   useRecoilState(showSearchState);
  // const setCoods = useSetRecoilState(coodsState);
  // const setWeatherState = useSetRecoilState(weatherState);

  // const [searchLocation, setSearchLocation] = useState("");
  // // const [searchResults, setSearchResults] = useState(defaultSearchResults);
  // const handleClick = () => {
  //   console.log(searchLocation);

  //   (async () => {
  //     const results = await asyncGetSearchResults(
  //       getCompleteURL(0, 0, "search", searchLocation)
  //     );
  //     // setSearchResults(results);
  //     console.log(results);
  //   })();
  // };

  // const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
  //   const newCoods: ICoords = {
  //     lat: e.currentTarget.dataset.lat
  //       ? parseInt(e.currentTarget.dataset.lat)
  //       : 17,
  //     lon: e.currentTarget.dataset.lon
  //       ? parseInt(e.currentTarget.dataset.lon)
  //       : 37,
  //   };

  //   // setCoods(newCoods);
  //   (async () => {
  //     const newWeatherState = await asyncFetchTodayData(
  //       getCompleteURL(newCoods.lat, newCoods.lon, "weather")
  //     );
  //     // setWeatherState(newWeatherState);
  //   })();
  //   setIsShowSearchPage(false);
  // };

  return (
    <>
      <CloseBtn setShowSearch={setShowSearch} />
      <SearchBox />
      <SearchResults />
    </>
  );
};
export default SearchConsole;
