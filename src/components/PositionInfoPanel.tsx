import React, { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { AVAILABLE_ROLES, EmployeePosition } from "../data/positions";
import AddRoleModal from "./AddRoleModal";

interface PositionInfoPanelProps {
  positions: EmployeePosition[];
  onAddPosition?: (position: EmployeePosition) => void;
}

/**
 * PositionInfoPanel Component
 *
 * Displays employee positions/roles with details including:
 * - Current roles as a list
 * - Role title, description, and start date
 * - Button to open AddRoleModal for adding new roles
 */
export function PositionInfoPanel({
  positions,
  onAddPosition,
}: PositionInfoPanelProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get assigned role titles for filtering
  const assignedRoleTitles = positions.map((pos) => pos.title);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 600,
          color: "primary.main",
        }}
      >
        Position Information
      </Typography>

      {/* Current Roles List */}
      {positions.length > 0 ? (
        <>
          <List sx={{ mb: 3 }}>
            {positions.map((position, index) => (
              <Box key={position.id}>
                <ListItem
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    py: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "primary.main",
                      mb: 0.5,
                    }}
                  >
                    {position.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 1,
                    }}
                  >
                    Started: {formatDate(position.startDate)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.primary",
                      fontStyle: "italic",
                    }}
                  >
                    {position.description}
                  </Typography>
                </ListItem>
                {index < positions.length - 1 && <Divider />}
              </Box>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
        </>
      ) : (
        <>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            No positions assigned yet.
          </Typography>
          <Divider sx={{ my: 2 }} />
        </>
      )}

      {/* Add Role Section */}
      {AVAILABLE_ROLES.length > assignedRoleTitles.length && (
        <Button
          startIcon={<AddIcon />}
          onClick={() => setIsModalOpen(true)}
          variant="outlined"
          sx={{ mt: 1 }}
        >
          Add Role
        </Button>
      )}

      {/* Add Role Modal */}
      <AddRoleModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddRole={(position) => {
          onAddPosition?.(position);
          setIsModalOpen(false);
        }}
        assignedRoles={assignedRoleTitles}
      />
    </Paper>
  );
}

export default PositionInfoPanel;
