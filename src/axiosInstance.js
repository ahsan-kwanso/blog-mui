import axios from "axios";
import { getToken } from "./utils/authUtils";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

//Now I don't have to include the token every time
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
