import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import Comment from "./Comment";

const CommentSection = ({ comments }) => {
  return (
    <Box>
      {comments.map((comment) => (
        <Box key={comment.id} sx={{ marginBottom: 4 }}>
          <Comment comment={comment} />
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default CommentSection;
