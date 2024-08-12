// src/components/ReplyForm.jsx
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const ReplyForm = ({ onClose }) => {
  const [reply, setReply] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle reply submission
    console.log("Reply submitted:", reply);
    setReply("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
