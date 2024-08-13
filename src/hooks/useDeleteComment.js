// src/hooks/useDeleteComment.js
import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { useError } from "./useError";

export const useDeleteComment = () => {
  const [error, setError] = useError();
  const [success, setSuccess] = useState(null);

  const deleteComment = async (commentId) => {
    try {
      const response = await axiosInstance.delete(`/comments/${commentId}`);
      if (response.status === 200) {
        setSuccess("Comment deleted successfully");
        return true;
      } else {
        // Handle specific status codes if needed
        setError("Failed to delete comment");
      }
    } catch (err) {
      // Error details from Axios response or other sources
      if (err.response) {
        // Inspect response error details
        // console.error("Error response data:", err.response.data);
        // console.error("Error response status:", err.response.status);
        if (err.response.status === 401)
          setError("You can't delete this comment");
        else setError(err.response.data.message || "Failed to delete comment");
      } else {
        // General error handling
        setError("Failed to delete comment");
      }
      //console.error("Error caught:", err);
    }
  };

  return { deleteComment, error, success };
};
