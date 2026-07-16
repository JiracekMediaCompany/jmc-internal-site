import React, { useMemo, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useThemeMode } from "../../context/ThemeContext";
import { validateCredentials } from "../../services/mockAuthService";
import { EMAIL_REGEX, EProjectStatusTypes } from "../../types";

interface LoginFormValues {
  email: string;
  password: string;
}

const getStyles = (isDark: boolean) => {
  return {
    pageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      bgcolor: "background.default",
      backgroundImage: isDark
        ? "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34, 211, 238, 0.12), transparent)"
        : "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(8, 145, 178, 0.06), transparent)",
      px: 2,
    },
    contentContainer: {
      p: 4,
      width: "100%",
      maxWidth: 400,
      borderRadius: 4,
    },
    signInText: {
      textAlign: "center",
      background: isDark
        ? "linear-gradient(135deg, #22D3EE 0%, #A78BFA 100%)"
        : "linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    alertText: { mb: 2 },
  };
};

export default function LoginPage() {
  const { login } = useAuth();
  const { isDark } = useThemeMode();
  const styles = useMemo(() => getStyles(isDark), [isDark]);

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoginError(null);
    try {
      const result = await validateCredentials(data.email, data.password);
      if (result.success && result.user) {
        login(result.user);
        navigate("/home", { replace: true });
      } else {
        setLoginError(result.error || "Login failed");
      }
    } catch (error) {
      setLoginError("An error occurred during login");
    }
  };

  return (
    <Box sx={styles.pageContainer}>
      <Paper elevation={isDark ? 0 : 3} sx={styles.contentContainer}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={styles.signInText}
        >
          Sign In
        </Typography>
        {loginError && (
          <Alert severity={EProjectStatusTypes.Error} sx={styles.alertText}>
            {loginError}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  autoComplete="email"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  autoComplete="current-password"
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              size="large"
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
