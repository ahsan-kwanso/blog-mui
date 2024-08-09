// src/components/NavigationTabs.jsx
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
        marginTop: "35px",
        marginLeft: "140px",
      }}
    >
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab label="All Posts" value="all-posts" />
        <Tab label="My Posts" value="my-posts" />
      </Tabs>
    </Box>
  );
};

export default NavigationTabs;
