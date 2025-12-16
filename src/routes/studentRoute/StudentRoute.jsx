import React from "react";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const StudentRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, isRoleLoading } = useRole();

  if (loading || isRoleLoading) {
    return <p>Loading...</p>;
  }

  if (role !== "Student") {
    return <p>Forbidden</p>;
  }

  return children;
};

export default StudentRoute;
