import Main from "../../components/Main/Main";
import Sidepane from "../../components/Sidepane/Sidepane";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidepane />
      <Main />
    </div>
  );
};

export default Home;
