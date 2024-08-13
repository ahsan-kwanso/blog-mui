import React, { useState, useEffect } from "react";
import { Container, Box, Divider, Skeleton, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ThemeHeader from "../components/ThemeHeader";
import PostDetails from "../components/PostDetails";
import CommentSection from "../components/CommentSection";
import useFetchPostWithComments from "../hooks/useFetchPostWithComments";

// Styled components for Skeleton
const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

const PostView = () => {
  const { postId } = useParams();
  const { post, loading, error } = useFetchPostWithComments(postId); // Use the custom hook
  console.log(error, loading);
  return (
    <Container component="main" maxWidth="md">
      <ThemeHeader />
      <Box sx={{ padding: 4, marginTop: "64px" }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {loading ? (
          <>
            <StyledSkeleton variant="rectangular" height={300} sx={{ mb: 2 }} />
            <StyledSkeleton variant="text" sx={{ fontSize: "2rem", mb: 2 }} />
            <StyledSkeleton variant="text" sx={{ mb: 2 }} />
            <StyledSkeleton variant="text" sx={{ mb: 2 }} />
            <Divider sx={{ my: 4 }} />
            <StyledSkeleton variant="text" sx={{ mb: 2 }} />
            <StyledSkeleton variant="rectangular" height={100} sx={{ mb: 2 }} />
          </>
        ) : (
          <>
            {post && <PostDetails post={post} />}
            <Divider sx={{ my: 4 }} />
            {post && <CommentSection comments={post.comments} />}
          </>
        )}
      </Box>
    </Container>
  );
};

export default PostView;
