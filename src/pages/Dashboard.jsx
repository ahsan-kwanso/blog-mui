// src/pages/Dashboard.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          {/* Dashboard content will go here */}
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
