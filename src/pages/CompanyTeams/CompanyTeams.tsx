import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { MOCK_TEAMS } from '../../data/teams';

/**
 * CompanyTeamsPage Component
 *
 * Displays company teams information in collapsible accordions.
 * Only accessible to signed-in users (protected by ProtectedRoute).
 */
export default function CompanyTeamsPage() {
  const [expandedTeam, setExpandedTeam] = useState<string | false>(false);

  const handleAccordionChange = (teamId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedTeam(isExpanded ? teamId : false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Page Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 600 }}
        >
          Company Teams
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', mt: 0.5 }}
        >
          View all teams in your organization
        </Typography>
      </Box>

      {/* Teams Accordions */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {MOCK_TEAMS.map((team) => (
          <Accordion 
            key={team.id} 
            defaultExpanded={false}
            expanded={expandedTeam === team.id}
            onChange={handleAccordionChange(team.id)}
          >
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              sx={{
                borderBottom: expandedTeam === team.id ? '2px solid' : 'none',
                borderColor: 'divider',
                transition: 'border 0.3s ease',
              }}
            >
              <Typography variant="h6">
                {team.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List sx={{ width: '100%' }}>
                {team.members.map((member, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={member} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
