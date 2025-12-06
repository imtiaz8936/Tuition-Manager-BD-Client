import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "imtiazul hopue",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
