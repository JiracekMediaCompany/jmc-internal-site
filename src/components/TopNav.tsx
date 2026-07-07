import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

/**
 * TopNav Component - Responsive top navigation bar
 * 
 * Features:
 * - Step 5: MUI AppBar, Toolbar, Drawer, Menu structure
 * - Step 6: Auth state integration, role-based visibility, sign-in/out
 * - Step 7: Semantic nav, ARIA labels, keyboard navigation, accessible focus management
 * - Step 8: MUI theme tokens, responsive breakpoints, styled for all states
 */
export function TopNav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Local UI state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
  const userMenuOpen = Boolean(userMenuAnchor);

  // Handlers
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleSignOut = () => {
    handleUserMenuClose();
    logout(); // Clear auth state
    navigate('/login', { replace: true }); // Navigate to login
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleNavigateHome = () => {
    handleDrawerClose();
    navigate('/home');
  };

  const handleNavigateSettings = () => {
    handleUserMenuClose();
    handleDrawerClose();
    navigate('/settings');
  };

  // Desktop Navigation Links (signed-in only)
  const renderDesktopNavLinks = () => {
    if (!user) return null;
    return (
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
        <Button
          color="inherit"
          component={RouterLink}
          to="/home"
          aria-label="Navigate to Home"
          sx={{
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/company-users"
          aria-label="Navigate to Company Users"
          sx={{
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          Company Users
        </Button>
      </Box>
    );
  };

  // Desktop Right Section (User Menu or Sign In)
  const renderDesktopRightSection = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {user ? (
          <IconButton
            onClick={handleUserMenuOpen}
            size="small"
            aria-label="User menu"
            aria-controls={userMenuOpen ? 'user-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={userMenuOpen ? 'true' : 'false'}
            color="inherit"
            sx={{
              '&:focus-visible': { outline: '2px solid white', outlineOffset: 2 },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        ) : (
          <Button
            color="inherit"
            onClick={handleSignIn}
            aria-label="Sign in to your account"
            sx={{
              textTransform: 'none',
              fontSize: '0.95rem',
              '&:focus-visible': { outline: '2px solid white', outlineOffset: 2 },
            }}
          >
            Sign In
          </Button>
        )}
      </Box>
    );
  };

  // Mobile Menu (inside Drawer)
  const renderMobileDrawer = () => {
    return (
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        aria-label="Mobile navigation menu"
      >
        <Box
          sx={{ width: 250, pt: 2 }}
          role="navigation"
          aria-label="Mobile menu"
        >
          <List>
            {/* Home Link (signed-in only) */}
            {user && (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleNavigateHome}
                    component={RouterLink}
                    to="/home"
                  >
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleDrawerClose}
                    component={RouterLink}
                    to="/company-users"
                  >
                    <ListItemText primary="Company Users" />
                  </ListItemButton>
                </ListItem>
                <Divider sx={{ my: 1 }} />
                {/* Settings Link (signed-in only) */}
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleNavigateSettings}
                    aria-label="Open Settings"
                  >
                    <SettingsIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </>
            )}

            {/* Sign Out (signed-in only) or Sign In (signed-out) */}
            {user ? (
              <>
                <Divider sx={{ my: 1 }} />
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleSignOut}
                    aria-label="Sign out"
                    sx={{ color: 'error.main' }}
                  >
                    <LogoutIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Sign Out" />
                  </ListItemButton>
                </ListItem>
                {user.email && (
                  <>
                    <Divider sx={{ my: 1 }} />
                    <ListItem>
                      <Typography
                        variant="caption"
                        sx={{ wordBreak: 'break-word', color: 'text.secondary' }}
                      >
                        {user.email}
                      </Typography>
                    </ListItem>
                  </>
                )}
              </>
            ) : (
              <>
                <Divider sx={{ my: 1 }} />
                <ListItem disablePadding>
                  <ListItemButton onClick={handleSignIn} aria-label="Sign in">
                    <ListItemText primary="Sign In" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    );
  };

  // User Dropdown Menu (desktop signed-in only)
  const renderUserMenu = () => {
    if (!user) return null;
    return (
      <Menu
        id="user-menu"
        anchorEl={userMenuAnchor}
        open={userMenuOpen}
        onClose={handleUserMenuClose}
        aria-label="User account menu"
      >
        <MenuItem disabled>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {user.email}
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleNavigateSettings} aria-label="Open Settings">
          <SettingsIcon sx={{ mr: 1 }} />
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSignOut} aria-label="Sign out">
          <LogoutIcon sx={{ mr: 1 }} />
          Sign Out
        </MenuItem>
      </Menu>
    );
  };

  return (
    <>
      {/* Main AppBar - Semantic <nav> with component prop */}
      <AppBar
        position="fixed"
        component="nav"
        aria-label="Main navigation"
        sx={{
          backgroundColor: 'background.paper',
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: theme.shadows[1],
        }}
      >
        <Toolbar>
          {/* Brand/Logo (left) */}
          <Typography
            variant="h6"
            component={RouterLink}
            to={user ? '/home' : '/login'}
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              cursor: 'pointer',
              '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
            }}
          >
            JMC
          </Typography>

          {/* Spacer to push nav to center */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation Links (centered) */}
          {renderDesktopNavLinks()}

          {/* Spacer to push right section to right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Right Section (theme + user menu / sign in) */}
          {!isMobile && renderDesktopRightSection()}

          {/* Mobile: Hamburger Menu Button (right) */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="Toggle navigation drawer"
              aria-controls="mobile-drawer"
              aria-expanded={drawerOpen}
              onClick={handleDrawerToggle}
              sx={{
                '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      {isMobile && renderMobileDrawer()}

      {/* User Dropdown Menu (desktop) */}
      {!isMobile && renderUserMenu()}
    </>
  );
}

export default TopNav;

