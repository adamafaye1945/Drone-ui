import { Button } from "@mui/material";

interface Button {
  text: string;
  type: "stop" | "navigate";
  size: number;
  action?: () => void;
}
export function CustomButton({
  text,
  type,
  size,
  action,
}: Button): JSX.Element {
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
