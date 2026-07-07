import { createTheme, ThemeOptions } from '@mui/material/styles';

export type ThemeMode = 'light' | 'dark';

const sharedTypography: ThemeOptions['typography'] = {
  fontFamily: [
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h4: { fontWeight: 700, letterSpacing: '-0.02em' },
  h5: { fontWeight: 700, letterSpacing: '-0.01em' },
  h6: { fontWeight: 600 },
  button: { textTransform: 'none', fontWeight: 600 },
};

const sharedShape: ThemeOptions['shape'] = {
  borderRadius: 12,
};

const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: {
    main: '#22D3EE',
    light: '#67E8F9',
    dark: '#0891B2',
    contrastText: '#041018',
  },
  secondary: {
    main: '#A78BFA',
    light: '#C4B5FD',
    dark: '#7C3AED',
    contrastText: '#0F0720',
  },
  background: {
    default: '#070B14',
    paper: '#0F1729',
  },
  text: {
    primary: '#F1F5F9',
    secondary: '#94A3B8',
  },
  divider: 'rgba(148, 163, 184, 0.12)',
  success: { main: '#34D399' },
  error: { main: '#F87171' },
  warning: { main: '#FBBF24' },
  info: { main: '#38BDF8' },
};

const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#0891B2',
    light: '#22D3EE',
    dark: '#0E7490',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#7C3AED',
    light: '#A78BFA',
    dark: '#6D28D9',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#EEF2F8',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#0F172A',
    secondary: '#64748B',
  },
  divider: 'rgba(15, 23, 42, 0.08)',
  success: { main: '#059669' },
  error: { main: '#DC2626' },
  warning: { main: '#D97706' },
  info: { main: '#0284C7' },
};

function buildComponentOverrides(mode: ThemeMode): ThemeOptions['components'] {
  const isDark = mode === 'dark';

  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: isDark ? '#334155 #0F1729' : '#CBD5E1 #EEF2F8',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          ...(isDark && {
            border: '1px solid rgba(148, 163, 184, 0.1)',
          }),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&.MuiButton-containedPrimary': {
            boxShadow: isDark
              ? '0 0 20px rgba(34, 211, 238, 0.25)'
              : '0 4px 14px rgba(8, 145, 178, 0.25)',
            '&:hover': {
              boxShadow: isDark
                ? '0 0 28px rgba(34, 211, 238, 0.35)'
                : '0 4px 18px rgba(8, 145, 178, 0.35)',
            },
          },
          '&.MuiButton-outlined': {
            borderWidth: 1.5,
            '&:hover': {
              borderWidth: 1.5,
            },
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 52,
          height: 28,
          padding: 0,
        },
        switchBase: {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(24px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 14,
          opacity: 1,
        },
      },
    },
  };
}

export function createAppTheme(mode: ThemeMode) {
  return createTheme({
    palette: mode === 'dark' ? darkPalette : lightPalette,
    typography: sharedTypography,
    shape: sharedShape,
    components: buildComponentOverrides(mode),
  });
}

export const themeMetaColors = {
  dark: '#070B14',
  light: '#EEF2F8',
} as const;
