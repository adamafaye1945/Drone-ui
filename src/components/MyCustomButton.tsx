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
      color={type == "navigate" ? "success" : "error"}
      sx={{
        width: size,
        backgroundColor: "#86A788",
      }}
      onClick={action}
    >
      {text}
    </Button>
  );
}
