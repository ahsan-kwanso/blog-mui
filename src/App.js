import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Intro from "./pages/Intro";
import Dashboard from "./pages/Dashboard";
import ThemeProvider from "./contexts/ThemeContext";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import MyPosts from "./pages/MyPosts";
import Profile from "./pages/Profile";
import PostView from "./pages/PostView";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import "./utils/global.css";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <Router>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                }}
              >
                <Routes>
                  <Route path="/" element={<Intro />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="/my-posts" element={<MyPosts />} />
                    <Route path="/post/create-post" element={<CreatePost />} />
                    <Route
                      path="/post/edit-post/:postId"
                      element={<EditPost />}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/posts/:postId" element={<PostView />} />
                  </Route>
                  {/* Other routes */}
                </Routes>
              </Box>
              <Footer />
            </Box>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
