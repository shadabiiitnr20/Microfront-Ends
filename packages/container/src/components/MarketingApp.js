import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const marketingAppRef = useRef(null);

  useEffect(() => {
    mount(marketingAppRef.current)
  });

  return <div ref={marketingAppRef}/>;
};

export default MarketingApp;
