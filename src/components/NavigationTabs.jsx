import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab =
    location.pathname === "/my-posts" ? "my-posts" : "all-posts";

  const handleTabChange = (event, newValue) => {
    if (newValue === "all-posts") {
      navigate("/dashboard");
    } else {
      navigate("/my-posts");
    }
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        marginTop: { xs: "64px", sm: "35px" },
        paddingX: 2, // Add horizontal padding for better alignment
        overflowX: "auto", // Allow horizontal scroll on smaller screens
        display: "flex",
        justifyContent: { xs: "flex-start", sm: "center" }, // Align left on small screens, center on larger
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        variant="scrollable" // Make tabs scrollable on small screens
        scrollButtons="auto" // Automatically show scroll buttons
      >
        <Tab label="All Posts" value="all-posts" />
        <Tab label="My Posts" value="my-posts" />
      </Tabs>
    </Box>
  );
};

export default NavigationTabs;
