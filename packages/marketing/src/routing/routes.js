import React from 'react';
import { Outlet } from "react-router-dom";
import App from "../components/App";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";

export const routes = [
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
];
