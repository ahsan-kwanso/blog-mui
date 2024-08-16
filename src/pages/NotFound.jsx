// src/pages/NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import ThemeHeader from "../components/ThemeHeader";
import { getToken } from "../utils/authUtils";

const NotFound = () => {
  const token = getToken();
  const navigate = useNavigate();
  const handleClick = () => {
    if (token) {
      navigate("/dashboard");
    } else navigate("/");
  };
  return (
    <>
      <ThemeHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          sx={{ mt: "20px" }}
        >
          Go to Homepage
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
