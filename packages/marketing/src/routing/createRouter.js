import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";
import { RoutingStrategy } from "./routingTypes";

export const createRouter = ({ strategy, initialPathname }) => {
  if (strategy === RoutingStrategy.BROWSER) {
    return createBrowserRouter(routes);
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes, { initialEntries: initialEntries });
};


