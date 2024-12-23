import { Button } from "@mui/material";
import { ButtonInterface } from "../types/droneTypes";
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
