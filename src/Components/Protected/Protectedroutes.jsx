import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const Protectedroutes = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  return <div>{currentUser ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default Protectedroutes;
