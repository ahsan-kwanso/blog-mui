// components/PostList.jsx
import React from "react";
import { Container, Grid, Skeleton } from "@mui/material";
import Post from "./Post";

const PostList = ({ posts, isLoading, onEdit, onDelete }) => {
  return (
    <Container sx={{ marginTop: "10px" }}>
      <Grid container spacing={2}>
        {isLoading
          ? Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" width="100%" height={140} />
                <Skeleton width="60%" />
                <Skeleton width="40%" />
                <Skeleton width="30%" />
                <Skeleton width="50%" />
              </Grid>
            ))
          : posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Post
                  author={post.author}
                  image={post.image}
                  title={post.title}
                  content={post.content}
                  date={post.date}
                  onView={() => console.log(`View post ${post.id}`)}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default PostList;
