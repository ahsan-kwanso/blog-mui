import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Divider,
  Skeleton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ThemeHeader from "../components/ThemeHeader";
import PostDetails from "../components/PostDetails";
import CommentSection from "../components/CommentSection";

const mockPost = {
  id: 1,
  title: "Astronaut",
  content:
    "The sky is made of sticks. That’s how high the trees go. With their tentpoles and walking canes. Like space explorers embarking the great unknown. Tall enough to stand on earth and be in heaven. Those trees are the most God I have ever known. Wearing crowns ringed with stars. The sky is deep blue like crescent-shaped sadness. And I’m just a size nine shoe.\n\nI got a tattoo of an astronaut reaching for a tesseract. I had no good reason. I’ve heard it said it is best to get tattoos simply because you enjoy them. When you ascribe meaning to things that don’t warrant meaning, you begin to think of yourself as a kind of god. That’s when the ego grows. No. It’s best not to be too clever about it. Get a tattoo of an astronaut because you like astronauts. Not because the astronaut represents an existential crisis of humanity at odds with its own destructive tendencies. Let God do the shepherding.",
  createdAt: "2024-07-25T07:02:15.083Z",
  updatedAt: "2024-08-08T06:49:09.084Z",
  comments: [
    {
      id: 1,
      title: "Dev",
      content: "Informative",
      createdAt: "2024-07-25T11:44:08.332Z",
      subComments: [
        {
          id: 2,
          title: "Dev",
          content: "Informative",
          createdAt: "2024-07-25T11:44:33.910Z",
          subComments: [
            {
              id: 3,
              title: "Dev",
              content: "Informative",
              createdAt: "2024-07-25T11:44:34.981Z",
              subComments: [],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Dev",
      content: "Not a new thing",
      createdAt: "2024-07-29T12:20:16.420Z",
      subComments: [
        {
          id: 46,
          title: "will",
          content: "will test delete here\n",
          createdAt: "2024-08-07T11:12:03.347Z",
          subComments: [
            {
              id: 54,
              title: "check",
              content: "check nested render",
              createdAt: "2024-08-07T11:26:45.779Z",
              subComments: [],
            },
          ],
        },
      ],
    },
  ],
};

// Styled components for Skeleton
const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

const PostView = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a delay
    const fetchData = async () => {
      setLoading(true);
      // Simulate a delay of 1 second
      setTimeout(() => {
        setPost(mockPost);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, [postId]);

  return (
    <Container component="main" maxWidth="md">
      <ThemeHeader />
      <Box sx={{ padding: 4, marginTop: "64px" }}>
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
            <PostDetails post={post} />
            <Divider sx={{ my: 4 }} />
            <CommentSection comments={post.comments} />
          </>
        )}
      </Box>
    </Container>
  );
};

export default PostView;
