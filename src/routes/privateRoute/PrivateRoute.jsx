import React from "react";
import { DotLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-30">
        <DotLoader color="red" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/signin"></Navigate>;
};

export default PrivateRoutes;
