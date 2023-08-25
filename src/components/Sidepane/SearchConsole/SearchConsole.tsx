import "./SearchConsole.css";
import CloseBtn from "./CloseBtn/CloseBtn";
import SearchBox from "./SearchBox/SearchBox";
import SearchResults from "./SearchResults/SearchResults";

const SearchConsole = ({ setShowSearch }: { setShowSearch: Function }) => {
  return (
    <>
      <CloseBtn setShowSearch={setShowSearch} />
      <SearchBox />
      <SearchResults setShowSearch={setShowSearch} />
    </>
  );
};
export default SearchConsole;
