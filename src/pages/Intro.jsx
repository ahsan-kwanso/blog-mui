import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { Link } from "react-router-dom";
import naturePic from "../assets/nature.jpeg";
import spacePic from "../assets/space.jpeg";

// Keyframe animation for the text
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframe animation for the cards sliding in from the right
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Keyframe animation for hover effect
const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const cardStyle = {
  maxWidth: 345,
  transition: "transform 0.3s ease-in-out",
  opacity: 0,
  animation: `${slideIn} 1s ease-out forwards`,
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const Intro = () => {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        padding: 4,
        gap: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: 600 },
          marginRight: { md: 4 },
          textAlign: "left",
          mb: { xs: 4, md: 0 }, // Add margin bottom on small screens
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              fontWeight: "bold",
            }}
          >
            Welcome to Our Blog
          </Typography>
          <Typography
            variant="h6"
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              color: "text.secondary",
            }}
          >
            Explore engaging articles and join our vibrant community. Dive into
            topics that spark your curiosity and connect with others who share
            your interests.
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="outlined"
              color="primary"
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            height="140"
            image={naturePic}
            alt="Nature"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Discover Nature
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Immerse yourself in stunning natural landscapes and uncover the
              wonders of the world around us. Experience the beauty.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            height="140"
            image={spacePic}
            alt="Space"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Explore the Cosmos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Venture into the mysteries of space and discover celestial
              phenomena and astronomical wonders. Unveil the secrets of the
              universe.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Intro;
