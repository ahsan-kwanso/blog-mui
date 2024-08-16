import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const showSnackbar = (message) => {
    // Prevent snackbar from being shown multiple times quickly
    setSnackbar((prev) => {
      if (prev.open) return prev;
      return { open: true, message };
    });
  };

  const handleClose = () => {
    setSnackbar({ open: false, message: "" });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3250}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
