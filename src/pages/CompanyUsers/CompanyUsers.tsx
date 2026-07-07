import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Container,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useThemeMode } from '../../context/ThemeContext';
import { MOCK_USERS } from '../../data/users';

/**
 * CompanyUsersPage Component
 *
 * Displays a list of all company users in a MUI DataGrid.
 * Only accessible to signed-in users (protected by ProtectedRoute).
 * Features sorting and pagination out of the box.
 */
export default function CompanyUsersPage() {
  const { isDark } = useThemeMode();

  // Define DataGrid columns
  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150,
      sortable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150,
      sortable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      sortable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      sortable: true,
    },
    {
      field: 'isAdmin',
      headerName: 'Admin',
      width: 100,
      sortable: true,
      renderCell: (params) => (params.value ? 'Yes' : 'No'),
    },
  ];

  // Transform mock users data to DataGrid rows format
  // DataGrid requires each row to have a unique 'id' field
  const rows = MOCK_USERS.map((user, index) => ({
    id: index,
    firstName: user.firstName,
    lastName: user.lastName,
    title: user.title,
    email: user.email,
    isAdmin: user.isAdmin,
  }));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Page Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 600 }}
        >
          Company Users
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', mt: 0.5 }}
        >
          View and manage all users in your organization
        </Typography>
      </Box>

      {/* DataGrid Container */}
      <Paper
        elevation={isDark ? 2 : 1}
        sx={{
          backgroundColor: isDark
            ? 'rgba(15, 23, 41, 0.8)'
            : 'rgba(255, 255, 255, 0.9)',
          minHeight: 400,
        }}
      >
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            paginationModel={{ pageSize: 10, page: 0 }}
            onPaginationModelChange={() => {}}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
            density="comfortable"
            sx={{
              border: 'none',
              '& .MuiDataGrid-cell': {
                paddingY: 1,
              },
              '& .MuiDataGrid-columnHeader': {
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
              },
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
}
