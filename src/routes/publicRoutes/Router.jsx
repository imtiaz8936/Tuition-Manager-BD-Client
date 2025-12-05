import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/rootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{}],
  },
]);
