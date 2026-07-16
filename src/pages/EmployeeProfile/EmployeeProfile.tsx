import React, { useState, useEffect, useMemo } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import EmployeeInfoPanel from "../../components/EmployeeInfoPanel";
import PositionInfoPanel from "../../components/PositionInfoPanel";
import { EmployeePosition } from "../../data/positions";
import { useThemeMode } from "../../context/ThemeContext";

const getStyles = (isDark: boolean) => {
  return {
    contentContainer: { py: 4 },
    panelTitle: {
      mb: 4,
      fontWeight: 600,
      color: "primary.main",
    },
  };
};

/**
 * EmployeeProfile Page
 *
 * Displays the current employee's profile information
 * Features:
 * - Employee Information Panel with First Name, Last Name, Email
 * - Position Information Panel with roles, start dates, and descriptions
 */
export function EmployeeProfile() {
  const { isDark } = useThemeMode();
  const styles = useMemo(() => getStyles(isDark), [isDark]);

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
      <Box sx={styles.contentContainer}>
        {/* Employee Information Header */}
        <Typography variant="h4" sx={styles.panelTitle}>
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
