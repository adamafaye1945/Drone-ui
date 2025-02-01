import { Alert, Button } from "@mui/material";
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
