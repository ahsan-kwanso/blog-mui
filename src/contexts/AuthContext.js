import React, { createContext, useState, useEffect } from "react";
import { setToken, removeToken } from "../utils/authUtils";
import { STORED_TOKEN } from "../utils/settings";
import axiosInstance from "../axiosInstance";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = STORED_TOKEN;
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

  const signup = async (name, email, password) => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });
      setToken(response.data.token);
      await fetchUser();
      return response;
    } catch (error) {
      let errorMessage = "Something went wrong!";
      if (error.response) {
        errorMessage = error.response.data.message;
        if (!error.response.data.message) errorMessage = "Invalid format";
      }
      throw new Error(errorMessage);
    }
  };

  const signin = async (email, password) => {
    try {
      const response = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });
      console.log(response);
      setToken(response.data.token);
      await fetchUser();
      return response;
    } catch (error) {
      let errorMessage = "Something went wrong!";
      if (error.response) {
        errorMessage = error.response.data.message;
        if (!error.response.data.message) errorMessage = "Invalid format";
      }
      throw new Error(errorMessage);
    }
  };

  const signout = () => {
    setUser(null);
    removeToken();
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
