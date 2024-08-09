// src/pages/Dashboard.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        {/* Dashboard content will go here */}
      </Box>
    </Container>
  );
};

export default Dashboard;
