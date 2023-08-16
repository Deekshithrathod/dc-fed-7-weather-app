import "./Sidepane.css";

import Display from "./Display/Display";
import SearchConsole from "./SearchConsole/SearchConsole";
import { useState } from "react";

const Sidepane = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="sidepane">
      {showSearch ? (
        <SearchConsole setShowSearch={setShowSearch} />
      ) : (
        <Display setShowSearch={setShowSearch} />
      )}
    </div>
  );
};

export default Sidepane;
