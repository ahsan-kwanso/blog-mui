import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Intro from "./pages/Intro";
import Dashboard from "./pages/Dashboard";
import ThemeProvider from "./contexts/ThemeContext";
import Header from "./components/Header";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
