import React from "react";
import {
  FaChalkboardTeacher,
  FaHome,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { LuFileCheck } from "react-icons/lu";
import { MdHome } from "react-icons/md";

const StudentMenu = () => {
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
        <li>
          <Link
            to="/dashboard"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Dashboard Home"
          >
            <MdHome size={20} />
            <span className="is-drawer-close:hidden">Dashboard Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/post-tuition"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Post Tuition"
          >
            <FaPlusCircle size={20} />
            <span className="is-drawer-close:hidden">Post Tuition</span>
          </Link>
        </li>

        {/* our dashboard links */}
        <li>
          <Link
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="My Tuitions"
            to="/dashboard/my-tuitions"
          >
            <FaChalkboardTeacher size={20} />
            <span className="is-drawer-close:hidden">My Tuitions</span>
          </Link>
        </li>
        <li>
          <Link
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Tutor Applications"
            to="/dashboard/tutor-applications"
          >
            <LuFileCheck size={20} />
            <span className="is-drawer-close:hidden">Tutor Applications</span>
          </Link>
        </li>
        <li>
          <Link
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Payment History"
            to="/dashboard/payment-history"
          >
            <HiOutlineCurrencyBangladeshi size={20} />
            <span className="is-drawer-close:hidden">Payment History</span>
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

export default StudentMenu;
