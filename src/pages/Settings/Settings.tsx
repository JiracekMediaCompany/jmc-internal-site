import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
} from "@mui/material";
import type { Theme } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import ThemeToggle from "../../components/ThemeToggle";

const getStyles = (theme: Theme) => {
  return {
    settingsContainer: { py: 4 },
    settingsHeader: { display: "flex", alignItems: "center", gap: 2, mb: 4 },
    settingsHeaderIconButton: {
      "&:focus-visible": { outline: "2px solid", outlineOffset: 2 },
    },
    settingsHeaderTitle: { fontWeight: 600 },
    appearanceSection: {
      mb: 2,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(15, 23, 41, 0.8)"
          : "rgba(255, 255, 255, 0.9)",
    },
    appearanceSectionHeader: { mb: 2, fontWeight: 600 },
    appearanceSectionContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
    },
    appearanceSectionContentText: { color: "text.secondary" },
    futureSettingsTextContainer: {
      mt: 4,
      pt: 2,
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    futureSettingsText: { color: "text.secondary" },
  };
};

/**
 * SettingsPage Component
 *
 * User settings page with theme toggle and extensible for future settings.
 * Only accessible to signed-in users (protected by ProtectedRoute).
 */
export function SettingsPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="sm" sx={styles.settingsContainer}>
      {/* Header with back button */}
      <Box sx={styles.settingsHeader}>
        <IconButton
          onClick={handleBack}
          aria-label="Go back to previous page"
          size="small"
          sx={styles.settingsHeaderIconButton}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1" sx={styles.settingsHeaderTitle}>
          Settings
        </Typography>
      </Box>

      {/* Appearance/Theme Section */}
      <Card sx={styles.appearanceSection}>
        <CardContent>
          <Typography
            id="appearance-heading"
            variant="h6"
            component="h2"
            sx={styles.appearanceSectionHeader}
          >
            Appearance
          </Typography>
          <Box
            sx={styles.appearanceSectionContent}
            role="region"
            aria-labelledby="appearance-heading"
          >
            <Typography
              variant="body2"
              sx={styles.appearanceSectionContentText}
            >
              Theme
            </Typography>
            <ThemeToggle />
          </Box>
        </CardContent>
      </Card>

      {/* Future Settings Placeholder */}
      <Box sx={styles.futureSettingsTextContainer}>
        <Typography variant="caption" sx={styles.futureSettingsText}>
          More settings coming soon...
        </Typography>
      </Box>
    </Container>
  );
}

export default SettingsPage;
