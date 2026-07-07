import React from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useThemeMode } from "../../context/ThemeContext";

export default function HomePage() {
  const { user, logout } = useAuth();
  const { isDark } = useThemeMode();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        backgroundImage: isDark
          ? "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(167, 139, 250, 0.1), transparent)"
          : "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(8, 145, 178, 0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(124, 58, 237, 0.06), transparent)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 72px)",
          px: 2,
        }}
      >
        <Paper
          elevation={isDark ? 0 : 2}
          sx={{
            p: 5,
            width: "100%",
            maxWidth: 480,
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <Stack spacing={3} sx={{ alignItems: "center" }}>
            <Typography variant="h4" component="h1" color="text.primary">
              Hello world
            </Typography>
            {user && (
              <Typography variant="body2" color="text.secondary">
                Logged in as {user.email}
              </Typography>
            )}
            <Button variant="contained" onClick={handleLogout} size="large">
              Logout
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
