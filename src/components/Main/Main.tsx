import Footer from "../Footer/Footer";
import Fiveday from "./Fiveday/Fiveday";
import Highlights from "./Highlights/Highlights";
import "./Main.css";
import UnitsToggle from "./UnitsToggle/UnitsToggle";

const Main = () => {
  return (
    <main>
      <UnitsToggle />
      <Fiveday />
      <Highlights />
      <Footer />
    </main>
  );
};

export default Main;
