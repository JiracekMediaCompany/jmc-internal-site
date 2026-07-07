import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import ThemeToggle from '../../components/ThemeToggle';

/**
 * SettingsPage Component
 * 
 * User settings page with theme toggle and extensible for future settings.
 * Only accessible to signed-in users (protected by ProtectedRoute).
 */
export function SettingsPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Header with back button */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <IconButton
          onClick={handleBack}
          aria-label="Go back to previous page"
          size="small"
          sx={{
            '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 600 }}
        >
          Settings
        </Typography>
      </Box>

      {/* Appearance/Theme Section */}
      <Card
        sx={{
          mb: 2,
          backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(15, 23, 41, 0.8)'
            : 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <CardContent>
          <Typography
            id="appearance-heading"
            variant="h6"
            component="h2"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Appearance
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
            role="region"
            aria-labelledby="appearance-heading"
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Theme
            </Typography>
            <ThemeToggle />
          </Box>
        </CardContent>
      </Card>

      {/* Future Settings Placeholder */}
      <Box sx={{ mt: 4, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Typography
          variant="caption"
          sx={{ color: 'text.secondary' }}
        >
          More settings coming soon...
        </Typography>
      </Box>
    </Container>
  );
}

export default SettingsPage;
