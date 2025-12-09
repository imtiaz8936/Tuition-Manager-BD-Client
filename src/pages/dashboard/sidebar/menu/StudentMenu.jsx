import React from "react";
import { FaChalkboardTeacher, FaHome, FaPlusCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router";

const StudentMenu = () => {
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
      </ul>
    </>
  );
};

export default StudentMenu;
