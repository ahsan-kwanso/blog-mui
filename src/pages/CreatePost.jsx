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
import { postSchema } from "../validations/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
  });

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
            {...register("title")}
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
            {...register("content")}
            error={!!errors.content}
            helperText={errors.content?.message}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              width: "100%",
              "@media (max-width: 280px)": {
                flexDirection: "column", // Switch to column at 350px or below
              },
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "auto", marginBottom: "10px" }}
              disabled={isCreating}
            >
              Create
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancel}
              sx={{ width: "auto", marginBottom: "10px" }}
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
