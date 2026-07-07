import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeModeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import TopNav from './components/TopNav';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import SettingsPage from './pages/Settings/Settings';
import CompanyUsersPage from './pages/CompanyUsers/CompanyUsers';

function App() {
  return (
    <ThemeModeProvider>
      <AuthProvider>
        <BrowserRouter>
          {/* TopNav persists across all routes */}
          <TopNav />
          {/* Reserve AppBar offset spacing so content doesn't sit under navigation */}
          <Box component="main" sx={{ pt: 8 }}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/company-users" element={<CompanyUsersPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </AuthProvider>
    </ThemeModeProvider>
  );
}

export default App;
