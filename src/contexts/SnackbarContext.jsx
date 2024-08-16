import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert, styled } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Initialize SweetAlert2
const MySwal = withReactContent(Swal);

// Create SnackbarContext
const SnackbarContext = createContext();

// Styled Snackbar Component
const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  "& .MuiSnackbarContent-root": {
    borderRadius: "8px",
    boxShadow: `0px 4px 6px rgba(0, 0, 0, 0.1)`,
  },
  "& .MuiAlert-root": {
    fontSize: "0.875rem",
    fontWeight: "bold",
    padding: theme.spacing(1, 2),
    borderRadius: "8px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

// SnackbarProvider Component
export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "info",
  });

  // Show Snackbar with styling
  const showSnackbar = (message, type = "info") => {
    MySwal.fire({
      title: message,
      icon: type, // 'success', 'error', 'warning', 'info'
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3250,
      timerProgressBar: true,
      customClass: {
        popup: "swal-toast",
      },
      didOpen: () => {
        // Add custom styling inline for the toast
        const toast = document.querySelector(".swal-toast");
        if (toast) {
          toast.style.marginBottom = "70px"; // Adjust this value as needed
        }
      },
    });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <StyledSnackbar
        open={snackbar.open}
        autoHideDuration={3250}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={snackbar.type}>
          {snackbar.message}
        </Alert>
      </StyledSnackbar>
    </SnackbarContext.Provider>
  );
};

// Custom Hook to use Snackbar Context
export const useSnackbar = () => useContext(SnackbarContext);
