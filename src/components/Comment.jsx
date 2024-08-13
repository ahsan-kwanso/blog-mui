// src/components/Comment.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyForm from "./ReplyForm";
import { format } from "date-fns";

const Comment = ({ comment }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [replying, setReplying] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleReply = () => {
    setReplying(true);
    handleMenuClose();
  };

  const handleCloseReplyForm = () => {
    setReplying(false);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Typography variant="subtitle1">{comment.title}</Typography> */}
        <Typography variant="subtitle1" color="text.primary">
          {comment.content}
        </Typography>
        <IconButton onClick={handleMenuClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          <MenuItem onClick={handleReply}>Reply</MenuItem>
        </Menu>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
        {`Posted on ${format(new Date(comment.createdAt), "MMMM dd, yyyy")}`}
      </Typography>
      {replying && <ReplyForm onClose={handleCloseReplyForm} />}
      {comment.subComments && comment.subComments.length > 0 && (
        <Box sx={{ ml: 4 }}>
          {comment.subComments.map((subComment) => (
            <Comment key={subComment.id} comment={subComment} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Comment;
