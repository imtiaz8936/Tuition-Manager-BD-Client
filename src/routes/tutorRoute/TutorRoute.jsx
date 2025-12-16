import React from "react";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const TutorRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, isRoleLoading } = useRole();

  if (loading || isRoleLoading) {
    return <p>Loading...</p>;
  }

  if (role !== "Tutor") {
    return <p>Forbidden</p>;
  }

  return children;
};

export default TutorRoute;
