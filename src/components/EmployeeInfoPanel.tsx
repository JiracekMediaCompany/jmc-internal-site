import React from 'react';
import { Paper, Box, Typography, TextField } from '@mui/material';

interface EmployeeInfo {
  firstName: string;
  lastName: string;
  email: string;
}

interface EmployeeInfoPanelProps {
  employeeInfo: EmployeeInfo;
}

/**
 * EmployeeInfoPanel Component
 * 
 * Displays employee information in a panel format
 * Shows: First Name, Last Name, and Email
 */
export function EmployeeInfoPanel({ employeeInfo }: EmployeeInfoPanelProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 600,
          color: 'primary.main',
        }}
      >
        Employee Information
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        {/* First Name */}
        <TextField
          label="First Name"
          value={employeeInfo.firstName}
          disabled
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                color: 'text.primary',
                '& .MuiInputBase-input': {
                  color: 'text.primary',
                },
              },
            },
          }}
          sx={{ width: '100%' }}
        />

        {/* Last Name */}
        <TextField
          label="Last Name"
          value={employeeInfo.lastName}
          disabled
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                color: 'text.primary',
                '& .MuiInputBase-input': {
                  color: 'text.primary',
                },
              },
            },
          }}
          sx={{ width: '100%' }}
        />

        {/* Email - spans both columns on desktop, single column on mobile */}
        <TextField
          label="Email"
          value={employeeInfo.email}
          disabled
          variant="outlined"
          slotProps={{
            input: {
              sx: {
                color: 'text.primary',
                '& .MuiInputBase-input': {
                  color: 'text.primary',
                },
              },
            },
          }}
          sx={{ width: '100%', gridColumn: { xs: 'auto', md: '1 / -1' } }}
        />
      </Box>
    </Paper>
  );
}

export default EmployeeInfoPanel;
