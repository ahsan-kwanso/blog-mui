// src/components/ReplyForm.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
import axiosInstance from "../axiosInstance";
import { useError } from "../hooks/useError";

const ReplyForm = ({ postId, parentId, onClose }) => {
  const [reply, setReply] = useState("");
  const [error, setError] = useError();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axiosInstance.post("/comments", {
        PostId: postId,
        content: reply,
        ParentId: parentId || null,
      });
      setReply("");
      onClose(); // Close the form after submission
    } catch (error) {
      setError("Failed to submit reply. Please try again.");
      console.error("Failed to submit reply", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <TextField
        fullWidth
        label="Write a reply..."
        multiline
        rows={4}
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="submit" variant="contained" color="primary">
          Reply
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default ReplyForm;
