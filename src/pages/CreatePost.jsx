// src/pages/CreatePost.jsx
import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThemeHeader from "../components/ThemeHeader";
import useCreatePost from "../hooks/useCreatePost";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { createPost, isCreating, error, success } = useCreatePost();

  const onSubmit = async (data) => {
    try {
      await createPost(data);
      if (!error) {
        navigate("/my-posts");
      }
    } catch (e) {
      console.error("Unexpected error:", e);
    }
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
        <Typography variant="h5">Create Post</Typography>
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
              disabled={isCreating}
            >
              Create
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
      {error && (
        <Snackbar open autoHideDuration={6000}>
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}
      {success && (
        <Snackbar open autoHideDuration={6000}>
          <Alert severity="success">{success}</Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default CreatePost;
