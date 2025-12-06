import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/rootLayout/RootLayout";
import Tuitions from "../../pages/tuitions/Tuitions";
import Home from "../../pages/home/home/Home";
import Signup from "../../pages/auth/signup/Signup";
import Signin from "../../pages/auth/signin/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/tuitions",
        element: <Tuitions></Tuitions>,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/signin",
        Component: Signin,
      },
    ],
  },
]);
