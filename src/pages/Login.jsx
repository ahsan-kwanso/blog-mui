// src/pages/LoginPage.jsx

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useError } from "../hooks/useError";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Link,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import ThemeHeader from "../components/ThemeHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validations/loginSchema";

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
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await signin(data.email, data.password);
      // Redirect or show success message
      if (status === 200) {
        //console.log(status, data);
        navigate("/dashboard"); // Redirect to dashboard or another route
      } else {
        setError("An unexpected error occurred. Try Again Later");
      }
    } catch (error) {
      setError(error.message);
    }
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
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
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
