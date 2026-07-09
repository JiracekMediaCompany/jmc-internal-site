import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeModeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import TopNav from './components/TopNav';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import SettingsPage from './pages/Settings/Settings';
import CompanyUsersPage from './pages/CompanyUsers/CompanyUsers';
import CompanyAppsPage from './pages/CompanyApps/CompanyApps';
import CompanyTeamsPage from './pages/CompanyTeams/CompanyTeams';
import CompanyResourcesPage from './pages/CompanyResources/CompanyResources';
import EmployeeProfilePage from './pages/EmployeeProfile/EmployeeProfile';

/**
 * Inner App component that has access to AuthContext
 */
function AppContent() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {/* TopNav only shows for logged-in users */}
      {user && <TopNav />}
      {/* Reserve AppBar offset spacing only when TopNav is visible */}
      <Box component="main" sx={{ pt: user ? 8 : 0 }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/company-users" element={<CompanyUsersPage />} />
            <Route path="/company-apps" element={<CompanyAppsPage />} />
            <Route path="/company-teams" element={<CompanyTeamsPage />} />
            <Route path="/company-resources" element={<CompanyResourcesPage />} />
            <Route path="/employee-profile" element={<EmployeeProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeModeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeModeProvider>
  );
}

export default App;
