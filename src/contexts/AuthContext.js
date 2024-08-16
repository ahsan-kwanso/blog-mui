import React, { createContext, useState, useEffect } from "react";
import { signup, signin, signout } from "../services/authService";
import { getToken } from "../utils/authUtils";
import axiosInstance from "../axiosInstance";

const initialAuthContext = {
  user: null,
  signup: async () => {},
  signin: async () => {},
  signout: () => {},
};

const AuthContext = createContext(initialAuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = getToken();
    if (token) {
      try {
        const response = await axiosInstance.get("/users/me");
        setUser(response.data.user);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSignup = async (name, email, password) => {
    const response = await signup(name, email, password);
    await fetchUser();
    return response;
  };

  const handleSignin = async (email, password) => {
    const response = await signin(email, password);
    await fetchUser();
    return response;
  };

  const handleSignout = () => {
    signout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup: handleSignup,
        signin: handleSignin,
        signout: handleSignout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
