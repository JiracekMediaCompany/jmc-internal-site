import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Container,
  Tabs,
  Tab,
} from '@mui/material';
import { useThemeMode } from '../../context/ThemeContext';
import { WEB_APPLICATION_GUIDE } from '../../data/implementationGuides/webAppGuide';
import { FEATURE_TEMPLATE } from '../../data/implementationGuides/featureTemplateGuide';

/**
 * TabPanel Component
 * 
 * Renders content for a specific tab based on the value prop.
 */
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`resource-tabpanel-${index}`}
      aria-labelledby={`resource-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

/**
 * CompanyResourcesPage Component
 *
 * Displays company resources organized by category in tabbed interface.
 * Phase 1: Tabs with placeholder content
 * Tabs: Feature Template, Mobile, Web App, Mobile Game, Computer Game
 * Only accessible to signed-in users (protected by ProtectedRoute).
 */
export default function CompanyResourcesPage() {
  const { isDark } = useThemeMode();
  const [activeTab, setActiveTab] = useState(0);

  // Tab configuration
  const tabs = [
    { label: 'Feature Template', id: 'feature-template' },
    { label: 'Mobile', id: 'mobile' },
    { label: 'Web App', id: 'web-app' },
    { label: 'Mobile Game', id: 'mobile-game' },
    { label: 'Computer Game', id: 'computer-game' },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 'bold' }}>
        Company Resources
      </Typography>

      {/* Tabs Card */}
      <Paper
        elevation={3}
        sx={{
          backgroundColor: isDark ? 'background.paper' : 'background.default',
        }}
      >
        {/* Tabs Bar */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="Resource categories"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              label={tab.label}
              id={`resource-tab-${index}`}
              aria-controls={`resource-tabpanel-${index}`}
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
              }}
            />
          ))}
        </Tabs>

        {/* Tab Content */}
        {tabs.map((tab, index) => (
          <TabPanel key={tab.id} value={activeTab} index={index}>
            <Box sx={{ py: 4 }}>
              {tab.id === 'feature-template' && (
                <>
                  <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Feature Template
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 4 }}>
                    This template structure is a foundational template used to write out plans and preserve resources. 
                    When writing plans, use this template as a foundation to help guide our AI tools to complete more 
                    company-aligned features. This ensures consistency, clarity, and alignment with organizational goals 
                    across all feature development initiatives.
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Template Structure
                  </Typography>
                  <Paper
                    sx={{
                      p: 3,
                      backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5',
                      border: `1px solid ${isDark ? '#333' : '#ddd'}`,
                      borderRadius: 1,
                      overflow: 'auto',
                      maxHeight: '600px',
                    }}
                  >
                    <Typography
                      component="pre"
                      variant="body2"
                      sx={{
                        fontFamily: 'monospace',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        color: isDark ? '#e0e0e0' : '#333',
                        lineHeight: 1.6,
                      }}
                    >
                      {FEATURE_TEMPLATE}
                    </Typography>
                  </Paper>
                </>
              )}
              {tab.id === 'mobile' && (
                <>
                  <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Mobile Resources
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 4 }}>
                    Resources for native and cross-platform mobile application development. Find documentation, 
                    design guidelines, testing frameworks, and deployment resources for iOS and Android applications. 
                    Includes best practices for mobile UI/UX, performance optimization, and accessibility standards 
                    specific to mobile platforms.
                  </Typography>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: isDark ? '#2a2a2a' : '#f0f0f0',
                      border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                      borderRadius: 1,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                      Coming Soon
                    </Typography>
                  </Paper>
                </>
              )}
              {tab.id === 'web-app' && (
                <>
                  <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Web Application Setup Guide
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 4 }}>
                    Comprehensive resources for web application development including frameworks, libraries, and tools. 
                    Access documentation on responsive design, progressive web apps (PWA), API integration, and deployment 
                    strategies. Includes front-end and back-end development guidelines, security protocols, and performance 
                    optimization techniques for web applications.
                  </Typography>
                  <Paper
                    sx={{
                      p: 3,
                      backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5',
                      border: `1px solid ${isDark ? '#333' : '#ddd'}`,
                      borderRadius: 1,
                      overflow: 'auto',
                      maxHeight: '600px',
                    }}
                  >
                    <Typography
                      component="pre"
                      variant="body2"
                      sx={{
                        fontFamily: 'monospace',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        color: isDark ? '#e0e0e0' : '#333',
                        lineHeight: 1.6,
                      }}
                    >
                      {WEB_APPLICATION_GUIDE}
                    </Typography>
                  </Paper>
                </>
              )}
              {tab.id === 'mobile-game' && (
                <>
                  <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Mobile Game Development
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 4 }}>
                    Resources and tools for mobile game development across iOS and Android platforms. Includes game engines, 
                    graphics libraries, physics engines, and monetization strategies. Find guidance on game design patterns, 
                    user acquisition, retention mechanics, and cross-platform deployment for optimal mobile game performance.
                  </Typography>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: isDark ? '#2a2a2a' : '#f0f0f0',
                      border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                      borderRadius: 1,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                      Coming Soon
                    </Typography>
                  </Paper>
                </>
              )}
              {tab.id === 'computer-game' && (
                <>
                  <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Computer Game Development
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8, mb: 4 }}>
                    Comprehensive resources for desktop and console game development. Access advanced game engines, 3D 
                    graphics tools, physics simulation, and multiplayer networking frameworks. Includes optimization techniques 
                    for high-performance graphics, distribution platforms, and resources for developing immersive gaming 
                    experiences on PC and console platforms.
                  </Typography>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: isDark ? '#2a2a2a' : '#f0f0f0',
                      border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                      borderRadius: 1,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                      Coming Soon
                    </Typography>
                  </Paper>
                </>
              )}
            </Box>
          </TabPanel>
        ))}
      </Paper>
    </Container>
  );
}
