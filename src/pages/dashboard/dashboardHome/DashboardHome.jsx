import React from "react";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../admin/AdminStatistics";
import StudentStatistics from "../../tuitions/StudentStatistics";

const DashboardHome = () => {
  const { role } = useRole();
  return (
    <div>
      {role === "Admin" && <AdminStatistics></AdminStatistics>}
      {role === "Student" && <StudentStatistics></StudentStatistics>}
    </div>
  );
};

export default DashboardHome;
