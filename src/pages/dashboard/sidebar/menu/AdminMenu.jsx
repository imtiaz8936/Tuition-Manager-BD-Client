import React from "react";
import {
  FaClipboardList,
  FaHome,
  FaSignOutAlt,
  FaUsersCog,
} from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AdminMenu = () => {
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
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Manage Users"
            to="/dashboard/manage-users"
          >
            <FaUsersCog size={20} />
            <span className="is-drawer-close:hidden">Manage Users</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/manage-tuitions"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Manage Tuitions"
          >
            <FaClipboardList size={20} />
            <span className="is-drawer-close:hidden">Manage Tuitions</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/approved-tuitions"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Manage Tuitions"
          >
            <MdVerifiedUser size={20} />
            <span className="is-drawer-close:hidden">Manage Tuitions</span>
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

export default AdminMenu;
