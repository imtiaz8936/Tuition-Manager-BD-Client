import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import Logo from "../../../Components/Logo/Logo";
// import useAuth from "../../../Hooks/useAuth";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
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
    </>
  );

  //   const { user, logOut } = useAuth();
  //   const navigate = useNavigate();

  const { user } = useAuth();

  const handleSignout = () => {
    //     logOut()
    //       .then(() => {
    //         // toast.success("Logout Successful");
    //         Swal.fire({
    //           icon: "success",
    //           title: "You Signed Out",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //         navigate("/signin");
    //       })
    //       .catch((error) => {
    //         toast.error(error);
    //       });
  };

  return (
    <div className="">
      <div className="navbar middle sticky">
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
          <div className="navbar-end gap-2">
            <img
              className="w-14 h-14 rounded-full"
              src={user?.photoURL}
              alt="profile-photo"
            />
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
