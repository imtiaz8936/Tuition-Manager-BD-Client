import React from "react";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../admin/AdminStatistics";

const DashboardHome = () => {
  const { role } = useRole();
  return <div>{role === "Admin" && <AdminStatistics></AdminStatistics>}</div>;
};

export default DashboardHome;
