import React, { useMemo } from "react";
import { StatCard } from "../../components/Home";
import { Box, Card, CardContent, Typography, Container } from "@mui/material";
import {
  Group as GroupIcon,
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  BarChart as BarChartIcon,
} from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
import { useThemeMode } from "../../context/ThemeContext";
import { mockApps } from "../../data/apps";
import { MOCK_TEAMS } from "../../data/teams";
import { EProjectStatus } from "../../types";

const getStyle = (isDark: boolean) => {
  return {
    homepageContainer: {
      height: "100vh",
      overflow: "hidden",
      bgcolor: "background.default",
      backgroundImage: isDark
        ? "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(167, 139, 250, 0.1), transparent)"
        : "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(8, 145, 178, 0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(124, 58, 237, 0.06), transparent)",
      py: { xs: 2, md: 4 },
      px: { xs: 2, md: 4 },
    },
    companyMottoBanner: {
      mb: 3,
      background: isDark
        ? "linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(167, 139, 250, 0.1) 100%)"
        : "linear-gradient(135deg, rgba(8, 145, 178, 0.08) 0%, rgba(124, 58, 237, 0.06) 100%)",
      border: isDark
        ? "1px solid rgba(34, 211, 238, 0.3)"
        : "1px solid rgba(8, 145, 178, 0.2)",
      backdropFilter: "blur(10px)",
    },
    quickStatsContainer: {
      mb: 3,
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr 1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr 1fr",
      },
      gap: 2,
    },
  };
};

export default function HomePage() {
  const { user } = useAuth();
  const { isDark } = useThemeMode();
  const styles = useMemo(() => getStyle(isDark), [isDark]);

  // Calculate stats
  const totalApps = mockApps.length;
  const activeApps = mockApps.filter(
    (app) => app.status === EProjectStatus.Active,
  ).length;
  const devApps = mockApps.filter(
    (app) => app.status === EProjectStatus.Development,
  ).length;
  const totalTeams = MOCK_TEAMS.length;

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <Box sx={styles.homepageContainer}>
      <Container maxWidth="lg">
        {/* Personalized Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            color="text.primary"
            sx={{ mb: 0.5, fontWeight: 600 }}
          >
            {getGreeting()}, {user?.firstName || "User"}! 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {user?.title || "Welcome to your dashboard"}
          </Typography>
        </Box>

        {/* Company Motto Banner */}
        <Card sx={styles.companyMottoBanner}>
          <CardContent sx={{ textAlign: "center", py: 4, px: 3 }}>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                lineHeight: 1.6,
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Jiracek Media Company (JMC) is all about{" "}
              <strong>growth and fun</strong>. We are here to push people to
              continue the passions they have through good software, AI
              integration and management, and creating everyday applications.
            </Typography>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Box sx={styles.quickStatsContainer}>
          <StatCard
            title="Total Apps"
            value={totalApps}
            icon={BarChartIcon}
            color="#06b6d4"
            isDark={isDark}
          />
          <StatCard
            title="Active Apps"
            value={activeApps}
            icon={CheckCircleIcon}
            color="#10b981"
            isDark={isDark}
          />
          <StatCard
            title="In Development"
            value={devApps}
            icon={CodeIcon}
            color="#3b82f6"
            isDark={isDark}
          />
          <StatCard
            title="Teams"
            value={totalTeams}
            icon={GroupIcon}
            color="#f59e0b"
            isDark={isDark}
          />
        </Box>
      </Container>
    </Box>
  );
}
