import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";
import "../../styles/App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default App;
