import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  //console.log(token);
  return token ? <Outlet /> : <Navigate to="/" />;
  /* Outlet means show whatever is inside that privateroute component, in our case seee that app.jsx profile is wrappeed within this private route */
};

export default PrivateRoute;
