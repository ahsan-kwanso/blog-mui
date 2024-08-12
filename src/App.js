import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const App = () => {
  //const location = useLocation();

  // Determine if the full header should be shown based on the current path

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/post/create-post" element={<CreatePost />} />
          <Route path="/post/edit-post/:postId" element={<EditPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:postId" element={<PostView />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
