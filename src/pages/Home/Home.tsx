// import { useRecoilValue } from "recoil";
import Main from "../../components/Main/Main";
import Sidepane from "../../components/Sidepane/Sidepane";
import "./Home.css";
// import { showSearchState } from "../../atoms/search";

const Home = () => {
  // const isShowSearchPage = useRecoilValue(showSearchState);
  return (
    <div
      // style={{ display: isShowSearchPage ? "none" : "inline-block" }}
      className="home">
      <Sidepane />
      <Main />
    </div>
  );
};

export default Home;
