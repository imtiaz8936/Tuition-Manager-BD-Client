import React from "react";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, isRoleLoading } = useRole();

  if (loading || isRoleLoading) {
    return <p>Loading...</p>;
  }

  if (role !== "Admin") {
    return <p>Forbidden</p>;
  }

  return children;
};

export default AdminRoute;
