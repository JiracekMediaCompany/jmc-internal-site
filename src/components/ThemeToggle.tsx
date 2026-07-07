import React from 'react';
import { Box, Switch, Typography, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useThemeMode } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeMode();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        py: 0.75,
        borderRadius: 3,
        bgcolor: theme.palette.mode === 'dark'
          ? 'rgba(15, 23, 41, 0.8)'
          : 'rgba(255, 255, 255, 0.85)',
        border: `1px solid ${theme.palette.divider}`,
        backdropFilter: 'blur(8px)',
      }}
    >
      <DarkModeOutlinedIcon
        sx={{
          fontSize: 18,
          color: isDark ? 'primary.main' : 'text.disabled',
          transition: 'color 0.2s',
        }}
      />
      <Switch
        checked={!isDark}
        onChange={toggleTheme}
        slotProps={{ input: { 'aria-label': 'Toggle light mode' } }}
        sx={{
          '& .MuiSwitch-track': {
            bgcolor: isDark ? 'rgba(34, 211, 238, 0.3)' : 'rgba(8, 145, 178, 0.2)',
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            bgcolor: 'primary.main',
          },
        }}
      />
      <LightModeOutlinedIcon
        sx={{
          fontSize: 18,
          color: !isDark ? 'secondary.main' : 'text.disabled',
          transition: 'color 0.2s',
        }}
      />
      <Typography
        variant="caption"
        sx={{
          ml: 0.5,
          fontWeight: 600,
          color: 'text.secondary',
          minWidth: 72,
        }}
      >
        {isDark ? 'Dark mode' : 'Light mode'}
      </Typography>
    </Box>
  );
}
