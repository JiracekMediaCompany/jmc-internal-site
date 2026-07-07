import React, { useState } from 'react';
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { mockApps } from '../../data/apps';
import { useThemeMode } from '../../context/ThemeContext';

/**
 * CompanyApps Page Component
 * Displays a table of all company applications with their details
 */
export default function CompanyAppsPage() {
  const { isDark } = useThemeMode();
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Filter apps based on search term
   * Searches across app name, development team, and created by
   */
  const filteredApps = mockApps.filter((app) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      app.name.toLowerCase().includes(searchLower) ||
      app.developmentTeam.toLowerCase().includes(searchLower) ||
      app.createdBy.toLowerCase().includes(searchLower)
    );
  });

  /**
   * Get status color based on app status
   */
  const getStatusColor = (status: string): 'success' | 'error' | 'warning' | 'info' => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'error';
      case 'Development':
        return 'info';
      case 'Maintenance':
        return 'warning';
      default:
        return 'info';
    }
  };

  /**
   * Format date for display
   */
  const formatDate = (date?: Date): string => {
    if (!date) return '-';
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return '-';
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  /**
   * Format string value - show "-" for empty strings
   */
  const formatString = (value?: string): string => {
    return value && value.trim() ? value : '-';
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        backgroundImage: isDark
          ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(167, 139, 250, 0.1), transparent)'
          : 'radial-gradient(ellipse 80% 50% at 50% -w20%, rgba(8, 145, 178, 0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(124, 58, 237, 0.06), transparent)',
        p: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" color="text.primary" sx={{ mb: 1 }}>
            Company Apps
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            View and manage all company applications
          </Typography>

          {/* Search and App Count Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
            <TextField
              placeholder="Search by app name, team, or creator..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                maxWidth: 500,
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'background.paper',
                },
              }}
              size="small"
            />
            <Box sx={{ ml: 'auto' }}>
              <Typography variant="body2" color="text.secondary">
                {searchTerm
                  ? `Showing ${filteredApps.length} of ${mockApps.length} apps`
                  : `Total Apps: ${mockApps.length}`}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Table Container */}
        <TableContainer
          component={Paper}
          elevation={isDark ? 0 : 2}
          sx={{
            borderRadius: 2,
            overflow: 'auto',
          }}
        >
          <Table stickyHeader aria-label="Company apps table">
            <TableHead>
              <TableRow sx={{ bgcolor: 'action.hover' }}>
                <TableCell sx={{ fontWeight: 600, minWidth: 150 }}>App Name</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 100 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 120 }}>Created Date</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 120 }}>Created By</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 130 }}>Modified Date</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 120 }}>Modified By</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 120 }}>Deployed Date</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 80 }}>Version</TableCell>
                <TableCell sx={{ fontWeight: 600, minWidth: 140 }}>Dev Team</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredApps.length > 0 ? (
                filteredApps.map((app) => (
                  <TableRow
                    key={app.id}
                    hover
                    sx={{
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <TableCell sx={{ fontWeight: 500 }}>{app.name}</TableCell>
                    <TableCell>
                      <Chip
                        label={app.status}
                        color={getStatusColor(app.status)}
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{formatDate(app.createdDate)}</TableCell>
                    <TableCell>{app.createdBy}</TableCell>
                    <TableCell>{formatDate(app.modifiedDate)}</TableCell>
                    <TableCell>{formatString(app.modifiedBy)}</TableCell>
                    <TableCell>{formatDate(app.deployedDate)}</TableCell>
                    <TableCell sx={{ fontFamily: 'monospace' }}>{app.version}</TableCell>
                    <TableCell>{app.developmentTeam}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                      No apps found matching &quot;{searchTerm}&quot;
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
