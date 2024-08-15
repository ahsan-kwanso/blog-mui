import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon
import { Home } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Person } from "@mui/icons-material";

const NavigationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab =
    location.pathname === "/my-posts" ? "my-posts" : "all-posts";
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleTabChange = (event, newValue) => {
    if (newValue === "all-posts") {
      navigate("/dashboard");
    } else if (newValue === "create-post") {
      navigate("/post/create-post"); // Navigate to the Create Post page
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
        justifyContent: { xs: "center", sm: "center" }, // Align left on small screens, center on larger
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        variant="scrollable" // Make tabs scrollable on small screens
        scrollButtons="auto" // Automatically show scroll buttons
      >
        <Tab
          label={isSmallScreen ? <Home /> : "All Posts"}
          value="all-posts"
          sx={{
            minWidth: 100, // Adjust the minimum width if needed
            paddingX: 1, // Reduce horizontal padding
          }}
        />
        <Tab
          label={isSmallScreen ? <Person /> : "My Posts"}
          value="my-posts"
          sx={{
            minWidth: 100, // Adjust the minimum width if needed
            paddingX: 1, // Reduce horizontal padding
          }}
        />
        {location.pathname === "/my-posts" && (
          <Tab
            label={isSmallScreen ? <AddIcon /> : "Create Posts"}
            value="create-post"
            iconPosition="start"
            sx={{
              minWidth: 100, // Adjust the minimum width as needed
              marginLeft: "auto", // Align to the right
              paddingX: 1,
            }}
          />
        )}
      </Tabs>
    </Box>
  );
};

export default NavigationTabs;
