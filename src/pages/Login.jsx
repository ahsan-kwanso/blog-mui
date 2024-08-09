// src/pages/LoginPage.jsx

import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import ThemeHeader from "../components/ThemeHeader";

// Define styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(8),
  boxShadow: theme.shadows[5],
}));

const Form = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SignupLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textDecoration: "none",
  color: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <>
      <ThemeHeader />
      <Container component="main" maxWidth="xs" sx={{ marginTop: "100px" }}>
        <StyledPaper>
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            Sign In
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <SubmitButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign In
            </SubmitButton>
            <SignupLink href="/signup" variant="body2">
              Don't have an account? Sign Up
            </SignupLink>
          </Form>
        </StyledPaper>
      </Container>
    </>
  );
};

export default Login;
