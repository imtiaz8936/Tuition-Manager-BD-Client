import React from "react";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../admin/AdminStatistics";
import StudentStatistics from "../../tuitions/StudentStatistics";
import TutorStatistics from "../../showTutorTuitions/TutorStatistics";

const DashboardHome = () => {
  const { role } = useRole();
  return (
    <div>
      {role === "Student" && <StudentStatistics></StudentStatistics>}
      {role === "Tutor" && <TutorStatistics></TutorStatistics>}
      {role === "Admin" && <AdminStatistics></AdminStatistics>}
    </div>
  );
};

export default DashboardHome;
