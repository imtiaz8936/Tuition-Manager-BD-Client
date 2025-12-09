import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/rootLayout/RootLayout";
import Tuitions from "../../pages/tuitions/Tuitions";
import Home from "../../pages/home/home/Home";
import Signup from "../../pages/auth/signup/Signup";
import Signin from "../../pages/auth/signin/Signin";
import DashboardLayout from "../../layouts/dashboardLayout/DashboardLayout";
import CreateTuition from "../../pages/createTuition/CreateTuition";
import PrivateRoutes from "../privateRoute/PrivateRoute";
import ShowTutorTuitions from "../../pages/showTutorTuitions/ShowTutorTuitions";

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
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/signin",
        Component: Signin,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <p>dashboard</p>,
      },
      {
        path: "/dashboard/my-tuitions",
        element: <Tuitions></Tuitions>,
      },
      {
        path: "/dashboard/tuitions",
        element: <ShowTutorTuitions></ShowTutorTuitions>,
      },
      {
        path: "/dashboard/post-tuition",
        element: <CreateTuition></CreateTuition>,
      },
    ],
  },
]);
