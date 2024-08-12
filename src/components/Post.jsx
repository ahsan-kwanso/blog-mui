// components/Post.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";
import { styled } from "@mui/material/styles";
import { getRandomImage } from "../utils/getRandomImage";

const PostCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
}));

const Post = ({
  author,
  image,
  title,
  content,
  date,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <PostCard>
      <CardMedia
        component="img"
        height="140"
        image={getRandomImage()} // Default image if none is provided //pass img in case of actual image
        alt={title}
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {format(new Date(date), "MMMM dd, yyyy")}
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content.length > 110 ? `${content.substring(0, 110)}...` : content}
        </Typography>
      </CardContent>
      <IconButton onClick={onView} color="primary" sx={{ margin: 2 }}>
        <VisibilityIcon />
      </IconButton>
      {onEdit && (
        <IconButton onClick={onEdit} color="secondary">
          <EditIcon />
        </IconButton>
      )}
      {onDelete && (
        <IconButton onClick={onDelete} color="error">
          <DeleteIcon />
        </IconButton>
      )}
    </PostCard>
  );
};

export default Post;
