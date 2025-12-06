import React from "react";
import Navbar from "../../pages/shared/navbar/navbar";
import { Outlet } from "react-router";
import Footer from "../../pages/shared/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
