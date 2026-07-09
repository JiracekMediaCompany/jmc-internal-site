import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import EmployeeInfoPanel from '../../components/EmployeeInfoPanel';
import PositionInfoPanel from '../../components/PositionInfoPanel';
import { EmployeePosition } from '../../data/positions';

/**
 * EmployeeProfile Page
 * 
 * Displays the current employee's profile information
 * Features:
 * - Employee Information Panel with First Name, Last Name, Email
 * - Position Information Panel with roles, start dates, and descriptions
 */
export function EmployeeProfile() {
  const { user } = useAuth();
  const [positions, setPositions] = useState<EmployeePosition[]>([]);

  // Load positions from user object on mount
  useEffect(() => {
    if (user?.positions) {
      setPositions(user.positions);
    }
  }, [user?.positions]);

  const handleAddPosition = (newPosition: EmployeePosition) => {
    setPositions([...positions, newPosition]);
  };

  if (!user) {
    return (
      <Container maxWidth="md">
        <Box sx={{ py: 4 }}>
          <Typography variant="h5" color="error">
            User information not available
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        {/* Employee Information Header */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          Employee Information
        </Typography>

        {/* Employee Information Panel */}
        <EmployeeInfoPanel
          employeeInfo={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          }}
        />

        {/* Position Information Panel */}
        <Box sx={{ mt: 4 }}>
          <PositionInfoPanel
            positions={positions}
            onAddPosition={handleAddPosition}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default EmployeeProfile;
