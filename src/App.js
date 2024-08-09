import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Intro from "./pages/Intro";
import Dashboard from "./pages/Dashboard";
import ThemeProvider from "./contexts/ThemeContext";
import Header from "./components/Header";

const App = () => {
  //const location = useLocation();

  // Determine if the full header should be shown based on the current path
  const showFullHeader = true;

  return (
    <ThemeProvider>
      <Router>
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
