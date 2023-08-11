import Footer from "../Footer/Footer";
import Fiveday from "./Fiveday/Fiveday";
import Highlights from "./Highlights/Highlights";
import "./Main.css";
const Main = () => {
  return (
    <main>
      <Fiveday />
      <Highlights />
      <Footer />
    </main>
  );
};

export default Main;
