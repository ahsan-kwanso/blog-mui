// src/hooks/useDeletePost.js
import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { useError } from "./useError";

const useDeletePost = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useError();

  const deletePost = async (postId, onSuccess) => {
    try {
      setIsDeleting(true);
      const response = await axiosInstance.delete(`/posts/${postId}`);
      if (response.data.message === "Post deleted successfully") {
        onSuccess(); // Callback to refresh the posts list or handle success
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred while deleting the post.");
    } finally {
      setIsDeleting(false);
    }
  };

  return { deletePost, isDeleting, error };
};

export default useDeletePost;
