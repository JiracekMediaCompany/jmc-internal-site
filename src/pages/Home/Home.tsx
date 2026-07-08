import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Container,
} from "@mui/material";
import {
  People as PeopleIcon,
  Group as GroupIcon,
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  BarChart as BarChartIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useThemeMode } from "../../context/ThemeContext";
import { mockApps } from "../../data/apps";
import { MOCK_TEAMS } from "../../data/teams";

export default function HomePage() {
  const { user } = useAuth();
  const { isDark } = useThemeMode();
  const navigate = useNavigate();

  // Calculate stats
  const totalApps = mockApps.length;
  const activeApps = mockApps.filter((app) => app.status === "Active").length;
  const devApps = mockApps.filter((app) => app.status === "Development").length;
  const totalTeams = MOCK_TEAMS.length;

  // Get top 5 recent apps (sorted by created date descending)
  const topApps = [...mockApps]
    .sort(
      (a, b) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    )
    .slice(0, 5);

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  // Get status color
  const getStatusColor = (
    status: string
  ): "success" | "error" | "warning" | "info" => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "error";
      case "Development":
        return "info";
      case "Maintenance":
        return "warning";
      default:
        return "info";
    }
  };

  // Format date
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Stat card component
  const StatCard = ({
    title,
    value,
    icon: Icon,
    color,
  }: {
    title: string;
    value: number;
    icon: any;
    color: string;
  }) => (
    <Card
      sx={{
        height: "100%",
        bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: "50%",
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

  // App card component
  const AppCard = ({ app }: { app: typeof mockApps[0] }) => (
    <Card
      sx={{
        height: "100%",
        bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
          {app.name}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={app.status}
            size="small"
            color={getStatusColor(app.status)}
            variant="filled"
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Team:</strong> {app.developmentTeam}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Version:</strong> {app.version}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Modified:</strong> {formatDate(app.modifiedDate || app.createdDate)}
        </Typography>
      </CardContent>
    </Card>
  );

  // Team card component
  const TeamCard = ({ team }: { team: typeof MOCK_TEAMS[0] }) => (
    <Card
      sx={{
        minWidth: 250,
        bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
          {team.name}
        </Typography>
        <Chip
          icon={<PeopleIcon />}
          label={`${team.members.length} members`}
          size="small"
          sx={{ mb: 2 }}
        />
        {team.description && (
          <Typography variant="body2" color="text.secondary">
            {team.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        bgcolor: "background.default",
        backgroundImage: isDark
          ? "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(167, 139, 250, 0.1), transparent)"
          : "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(8, 145, 178, 0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(124, 58, 237, 0.06), transparent)",
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 4 },
      }}
    >
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
        <Card
          sx={{
            mb: 3,
            background: isDark
              ? "linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(167, 139, 250, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(8, 145, 178, 0.08) 0%, rgba(124, 58, 237, 0.06) 100%)",
            border: isDark
              ? "1px solid rgba(34, 211, 238, 0.3)"
              : "1px solid rgba(8, 145, 178, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
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
              Jiracek Media Company (JMC) is all about <strong>growth and fun</strong>. We are here to push people to continue the passions they have through good software, AI integration and management, and creating everyday applications.
            </Typography>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Box sx={{ mb: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }, gap: 2 }}>
          <StatCard
            title="Total Apps"
            value={totalApps}
            icon={BarChartIcon}
            color="#06b6d4"
          />
          <StatCard
            title="Active Apps"
            value={activeApps}
            icon={CheckCircleIcon}
            color="#10b981"
          />
          <StatCard
            title="In Development"
            value={devApps}
            icon={CodeIcon}
            color="#3b82f6"
          />
          <StatCard
            title="Teams"
            value={totalTeams}
            icon={GroupIcon}
            color="#f59e0b"
          />
        </Box>


      </Container>
    </Box>
  );
}
