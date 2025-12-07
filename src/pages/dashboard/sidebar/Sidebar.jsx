import React from "react";
import { FaChalkboardTeacher, FaHome, FaPlusCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
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
              data-tip="Tuitions"
              to="/dashboard/tuitions"
            >
              <FaChalkboardTeacher size={20} />
              <span className="is-drawer-close:hidden">Tuitions</span>
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
      </div>
    </div>
  );
};

export default Sidebar;
