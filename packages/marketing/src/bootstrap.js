import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routing/createRouter";

//Mount function to start up the app
const mount = ({ mountPoint, initialPathname, routingStrategy }) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = ReactDOM.createRoot(mountPoint);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };

//If we are in development and in isolation,
//call mount immediately
// if (process.env.NODE_ENV === "development") {
//   const devRootElement = document.getElementById("_marketing-dev-root");
//   if (devRootElement) {
//     mount(devRootElement);
//   }
// }

//We are running through container
//then we should export the mount function
// export { mount };
