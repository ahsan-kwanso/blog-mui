// src/hooks/useFetchPost.js
import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance"; // Adjust the import path based on your project structure
import { useError } from "./useError";

const useFetchPostWithComments = (postId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useError();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        const response = await axiosInstance.get(`/post/${postId}/comments`);
        setPost(response.data);
        return response.data;
      } catch (err) {
        setError("Failed to load post");
        console.error(err); // Optional: log the error to the console
        throw err;
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, loading, error };
};

export default useFetchPostWithComments;
