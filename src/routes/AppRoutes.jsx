import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Intro from "../pages/Intro";
import Dashboard from "../pages/Dashboard";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import MyPosts from "../pages/MyPosts";
import Profile from "../pages/Profile";
import PostView from "../pages/PostView";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<PrivateRoute />}>
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/post/create-post" element={<CreatePost />} />
          <Route path="/post/edit-post/:postId" element={<EditPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:postId" element={<PostView />} />
        </Route>
        {/* Other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
