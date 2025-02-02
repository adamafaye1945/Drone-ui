import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
interface alertProps {
  message: string;
  type: "success" | "warning" | "error";
  action?: () => void;
}
export function AlertMessage({ message, type, action }: alertProps) {
  return (
    <Button onClick={action} sx={{ width: "70%", marginTop: "10px" }}>
      <Alert severity={type} variant="outlined">
        {message}
      </Alert>
    </Button>
  );
}
interface Feedbackprops {
  message: string;
  handleClose: () => void;
  open: boolean;
}
export function Feedback({ message, handleClose, open }: Feedbackprops) {
  const feedback = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      sx={{ backgroundColor: "#86A788" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      action={feedback}
    >
      <Alert severity="success" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}
