import React from "react";
import { Tabs, Tab, Box, Button, Tooltip } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon
import ListAltIcon from "@mui/icons-material/ListAlt"; // Import the ListAlt icon
import PersonIcon from "@mui/icons-material/Person"; // Import the Person icon

const NavigationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab =
    location.pathname === "/my-posts" ? "my-posts" : "all-posts";

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
        // variant="scrollable" // Make tabs scrollable on small screens
        // scrollButtons="auto" // Automatically show scroll buttons
      >
        <Tooltip title="All Posts" arrow>
          <Tab
            value="all-posts"
            icon={<ListAltIcon />}
            iconPosition="start"
            sx={{
              display: { xs: "inline-flex", sm: "none" }, // Show icon below 435px width
              minWidth: { xs: "auto", sm: 150 }, // Adjust width
            }}
          />
        </Tooltip>
        <Tooltip title="My Posts" arrow>
          <Tab
            value="my-posts"
            icon={<PersonIcon />}
            iconPosition="start"
            sx={{
              display: { xs: "inline-flex", sm: "none" }, // Show icon below 435px width
              minWidth: { xs: "auto", sm: 150 }, // Adjust width
            }}
          />
        </Tooltip>
        {location.pathname === "/my-posts" && (
          <Tooltip title="Create Post" arrow>
            <Tab
              value="create-post"
              icon={<AddIcon />}
              iconPosition="start"
              sx={{
                display: { xs: "inline-flex", sm: "none" }, // Show icon below 435px width
                marginLeft: "auto",
                minWidth: { xs: "auto", sm: 150 },
              }}
            />
          </Tooltip>
        )}
        <Tab
          label="All Posts"
          value="all-posts"
          sx={{
            display: { xs: "none", sm: "inline-flex" }, // Show text label on larger screens
            minWidth: 150,
          }}
        />
        <Tab
          label="My Posts"
          value="my-posts"
          sx={{
            display: { xs: "none", sm: "inline-flex" }, // Show text label on larger screens
            minWidth: 150,
          }}
        />
        {location.pathname === "/my-posts" && (
          <Tab
            label="Create Post"
            value="create-post"
            icon={<AddIcon />}
            iconPosition="start"
            sx={{
              display: { xs: "none", sm: "inline-flex" }, // Show text label on larger screens
              marginLeft: "auto",
              minWidth: 150,
            }}
          />
        )}
      </Tabs>
    </Box>
  );
};

export default NavigationTabs;
