import React from "react";
import logo from "../../assets/tuition-logo.jpg";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex gap-1 items-center">
        <img className="w-18 h-18" src={logo} alt="" />
        <div>
          <h1 className="font-bold text-3xl">tuition</h1>
          <h1 className="font-bold text-2xl">ManagerBD</h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
