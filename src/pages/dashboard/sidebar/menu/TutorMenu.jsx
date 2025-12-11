import React from "react";
import { FaChalkboardTeacher, FaHome, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { LuFileCheck } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const TutorMenu = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
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
    <>
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <Link
            to="/"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Homepage"
          >
            <FaHome size={20} />
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        {/* our dashboard links */}
        <li>
          <Link
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Available Tuitions"
            to="/dashboard/tuitions"
          >
            <FaChalkboardTeacher size={20} />
            <span className="is-drawer-close:hidden">Available Tuitions</span>
          </Link>
        </li>
        <li>
          <Link
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="My Applications"
            to="/dashboard/my-applications"
          >
            <LuFileCheck size={20} />
            <span className="is-drawer-close:hidden">My Applications</span>
          </Link>
        </li>

        {/* List item */}
        <li>
          <button
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Settings"
          >
            <IoMdSettings size={20} />
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
        <li>
          <button
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Sign Out"
            onClick={handleSignout}
          >
            <FaSignOutAlt size={20} />
            <span className="is-drawer-close:hidden">Sign Out</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default TutorMenu;
