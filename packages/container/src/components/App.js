import React, { useEffect, useRef } from "react";
import MarketingApp from "./MarketingApp";
import "../../styles/App.css";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header/>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
