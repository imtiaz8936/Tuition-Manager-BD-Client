import React from "react";
import StudentMenu from "./menu/StudentMenu";
import useRole from "../../../hooks/useRole";
import { DotLoader } from "react-spinners";

const Sidebar = () => {
  const { role, isRoleLoading } = useRole();

  if (isRoleLoading) {
    return (
      <div className="flex justify-center items-center mt-30">
        <DotLoader color="red" />
      </div>
    );
  }
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      {/* Sidebar content here */}
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Role Based Menu */}
        {role === "Student" && <StudentMenu></StudentMenu>}
      </div>
    </div>
  );
};

export default Sidebar;
