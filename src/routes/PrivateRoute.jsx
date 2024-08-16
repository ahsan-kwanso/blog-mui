import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSnackbar } from "../contexts/SnackbarContext";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (!token) {
      showSnackbar("Please login first");
    }
  }, [token, showSnackbar]);

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
