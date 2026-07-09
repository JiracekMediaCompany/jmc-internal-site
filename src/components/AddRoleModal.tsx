import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";
import { NavigateBefore as PreviousIcon } from "@mui/icons-material";
import { AVAILABLE_ROLES, EmployeePosition } from "../data/positions";

interface AddRoleModalProps {
  open: boolean;
  onClose: () => void;
  onAddRole: (position: EmployeePosition) => void;
  assignedRoles: string[];
}

type ModalStep = "select" | "confirm";

/**
 * AddRoleModal Component
 *
 * Multi-step modal for adding roles to employees
 * Step 1: Role Selection - Choose from available roles
 * Step 2: Role Confirmation - Review selected role details
 */
export function AddRoleModal({
  open,
  onClose,
  onAddRole,
  assignedRoles,
}: AddRoleModalProps) {
  const [step, setStep] = useState<ModalStep>("select");
  const [selectedRoleId, setSelectedRoleId] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  // Get available roles not already assigned
  const availableRolesToAdd = AVAILABLE_ROLES.filter(
    (role) => !assignedRoles.includes(role.title),
  );

  const selectedRole = AVAILABLE_ROLES.find(
    (role) => role.id === selectedRoleId,
  );

  const handleNext = () => {
    if (selectedRole) {
      setStep("confirm");
    }
  };

  const handlePrevious = () => {
    setStep("select");
  };

  const handleClose = () => {
    setStep("select");
    setSelectedRoleId("");
    setStartDate(new Date().toISOString().split("T")[0]);
    onClose();
  };

  const handleAddRole = () => {
    if (!selectedRole) return;

    const newPosition: EmployeePosition = {
      ...selectedRole,
      startDate,
    };

    onAddRole(newPosition);
    handleClose();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      {step === "select" && (
        <>
          <DialogTitle>Add Role</DialogTitle>
          <DialogContent sx={{ pt: 2 }}>
            <TextField
              select
              label="Select Role"
              value={selectedRoleId}
              onChange={(e) => setSelectedRoleId(e.target.value)}
              fullWidth
              size="small"
              helperText="Choose a role to add to your profile"
            >
              {availableRolesToAdd.length > 0 ? (
                availableRolesToAdd.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No available roles</MenuItem>
              )}
            </TextField>

            <TextField
              type="date"
              label="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              fullWidth
              size="small"
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions sx={{ justifyContent: "space-between" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={handleNext}
              variant="contained"
              disabled={!selectedRole}
            >
              Next
            </Button>
          </DialogActions>
        </>
      )}

      {step === "confirm" && selectedRole && (
        <>
          <DialogTitle>Confirm Role</DialogTitle>
          <DialogContent sx={{ pt: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Role Information
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                backgroundColor: "action.hover",
                borderRadius: 1,
                fontFamily: "monospace",
                fontSize: "0.875rem",
              }}
            >
              <Box component="pre" sx={{ m: 0, whiteSpace: "pre-wrap" }}>
                {JSON.stringify(
                  {
                    title: selectedRole.title,
                    description: selectedRole.description,
                    startDate: formatDate(startDate),
                    id: selectedRole.id,
                  },
                  null,
                  2,
                )}
              </Box>
            </Paper>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "space-between" }}>
            <Button onClick={handlePrevious} startIcon={<PreviousIcon />}>
              Previous
            </Button>
            <Button onClick={handleAddRole} variant="contained">
              Confirm
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default AddRoleModal;
