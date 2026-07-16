import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const getStyles = (isDark: boolean) => {
  return {
    statCardContainer: {
      height: "100%",
      bgcolor: isDark
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(10px)",
      border: isDark
        ? "1px solid rgba(255, 255, 255, 0.1)"
        : "1px solid rgba(255, 255, 255, 0.3)",
    },
    statCardContentContainer: { display: "flex", alignItems: "center", gap: 2 },
    statCardIconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 48,
      height: 48,
      borderRadius: "50%",
    },
  };
};

export const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
  isDark,
}: {
  title: string;
  value: number;
  icon: any;
  color: string;
  isDark: boolean;
}) => {
  const styles = getStyles(isDark);

  return (
    <Card sx={styles.statCardContainer}>
      <CardContent>
        <Box sx={styles.statCardContentContainer}>
          <Box
            sx={{
              ...styles.statCardIconContainer,
              bgcolor: `${color}20`,
              color: color,
            }}
          >
            <Icon />
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
