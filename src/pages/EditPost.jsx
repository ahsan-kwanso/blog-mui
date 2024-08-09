// src/pages/EditPost.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ThemeHeader from "../components/ThemeHeader";

const EditPost = () => {
  const { postId } = useParams(); // Get post ID from URL
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  useEffect(() => {
    // Fetch the post details from backend using postId
    const fetchPost = async () => {
      // Replace this with your actual fetch logic
      const fetchedPost = {
        title: "Sample Title",
        content: "Sample content...",
        lastUpdated: "2024-08-09T12:00:00Z", // Example date
      };
      setValue("title", fetchedPost.title);
      setValue("content", fetchedPost.content);
    };
    fetchPost();
  }, [postId, setValue]);

  const onSubmit = async (data) => {
    // Implement post update logic here
    console.log(data);

    // Redirect to dashboard after updating post
    navigate("/dashboard");
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <Container component="main" maxWidth="xs">
      <ThemeHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          alignItems: "center",
          padding: 3,
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5">Edit Post</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%", marginTop: "16px" }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            {...register("title", { required: "Title is required" })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="content"
            label="Content"
            name="content"
            multiline
            rows={6} // Increased height for content box
            {...register("content", { required: "Content is required" })}
            error={!!errors.content}
            helperText={errors.content?.message}
          />
          <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
            Last Updated: 2024-08-09
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              width: "100%",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "auto" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancel}
              sx={{ width: "auto" }}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default EditPost;
