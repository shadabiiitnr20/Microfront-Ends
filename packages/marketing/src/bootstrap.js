import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

import App from "./components/App";

//Mount function to start up the app
const mount = (el) => {
  const root = ReactDOM.createRoot(el);

  root.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

//If we are in development and in isolation,
//call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRootElement = document.getElementById("_marketing-dev-root");
  if (devRootElement) {
    mount(devRootElement);
  }
}

//We are running through container
//then we should export the mount function
export { mount };
