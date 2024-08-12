// src/hooks/useFetchPost.js
import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

const useFetchPost = (postId) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${postId}`);
        setPost(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, isLoading, error };
};

export default useFetchPost;
