import axiosInstance from "../axiosInstance";
import { removeToken, setToken } from "../utils/authUtils";

export const signup = async (name, email, password) => {
  try {
    const response = await axiosInstance.post("/auth/signup", {
      name,
      email,
      password,
    });
    setToken(response.data.token);
    return response;
  } catch (error) {
    let errorMessage = "Something went wrong!";
    if (error.response) {
      errorMessage = error.response.data.message;
      if (!error.response.data.message) errorMessage = "Invalid format";
    }
    console.error("Sign up Failed: ", error);
  }
};

export const signin = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/signin", {
      email,
      password,
    });
    setToken(response.data.token);
    return response;
  } catch (error) {
    let errorMessage = "Something went wrong!";
    if (error.response) {
      errorMessage = error.response.data.message;
      if (!error.response.data.message) errorMessage = "Invalid format";
    }
    console.error("Sign in Failed: ", error);
  }
};

export const signout = () => {
  removeToken();
};
