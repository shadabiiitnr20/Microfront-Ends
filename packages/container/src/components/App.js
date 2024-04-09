import React, { useEffect, useRef } from "react";
import MarketingApp from "./MarketingApp";
import "../../styles/App.css";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline p-2 m-2">
        Hello from Container...!!
      </h1>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
