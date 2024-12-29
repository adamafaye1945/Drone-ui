import { Button } from "@mui/material";
import { ButtonInterface } from "../types/droneTypes";
import { useState } from "react";
export function CustomButton({
  text,
  type,
  size,
  action,
}: ButtonInterface): JSX.Element {
  return (
    <Button
      variant="contained"
      sx={{
        width: size,
        backgroundColor: type == "navigate" ? "#86A788" : "red",
      }}
      onClick={action}
    >
      {text}
    </Button>
  );
}
interface closeProps {
  onClose: () => void;
}
export const CloseButton = ({ onClose }: closeProps) => {
  return (
    <button
      style={{
        background: "none",
        border: "1px solid #ccc",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "4px 8px",
        borderRadius: "5px",
        cursor: "pointer",
        display: "inline-block",
        color: "#86A788",
        
      }}
      onClick={onClose}
      aria-label="Close"
    >
      &times;
    </button>
  );
};
