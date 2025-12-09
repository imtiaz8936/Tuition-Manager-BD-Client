import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import Logo from "../../../Components/Logo/Logo";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [showName, setShowName] = useState(false);
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/tuitions"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Tuitions</li>
      </NavLink>
      <NavLink
        to="/tutors"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Tutors</li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>About</li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Contact</li>
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `${isActive ? "active-link" : ""}`}
        >
          <li>Dashboard</li>
        </NavLink>
      )}
    </>
  );

  const handleSignout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "You Signed Out",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/signin");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="sticky top-0 z-50 bg-base-100">
      <div className="navbar middle">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content text-[16px] font-semibold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {navLinks}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[16px] font-semibold px-1 space-x-4">
            {navLinks}
          </ul>
        </div>
        {user ? (
          <div className="navbar-end gap-2 relative">
            <button
              className="cursor-pointer"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              <img
                className="w-14 h-14 rounded-full"
                src={user?.photoURL}
                alt="profile-photo"
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
              />
            </button>
            {showName && (
              <div className="absolute mt-26 mr-24 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap z-10">
                {user.displayName}
              </div>
            )}
            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm space-y-5"
              popover="auto"
              id="popover-1"
              style={{ positionAnchor: "--anchor-1" }}
            >
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{user.displayName}</h2>
                <p className="text-red-500 text-[16px]">{user.email}</p>
              </div>
              <Link
                onClick={handleSignout}
                className="btn btn-primary w-full text-[16px] text-black
                                flex flex-inline justify-center items-center"
              >
                Sign Out <IoLogOutOutline size={20} />
              </Link>
            </div>
            <div>
              <Link onClick={handleSignout} to="" className="btn bg-primary">
                Sign Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <div>
              <Link to="/signin" className="btn">
                Sign In
              </Link>
            </div>
            <div>
              <Link to="/signup" className="btn bg-primary">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
