import { createBrowserRouter } from "react-router-dom";
import Initializer from "./initializer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Initializer />,
  },
]);
