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
import { format } from "date-fns";
import { styled } from "@mui/material/styles";
import postImage from "../assets/space.jpeg"; // Example image from assets
import postImage2 from "../assets/nature.jpeg";
import postImage3 from "../assets/health.jpeg";
import postImage4 from "../assets/football.jpeg";
import postImage5 from "../assets/egypt.jpeg";
import postImage6 from "../assets/history.jpeg";

const getRandomImage = () => {
  const images = [
    postImage,
    postImage2,
    postImage3,
    postImage4,
    postImage5,
    postImage6,
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const PostCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
}));

const Post = ({ author, image, title, content, date, onView }) => {
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
    </PostCard>
  );
};

export default Post;
