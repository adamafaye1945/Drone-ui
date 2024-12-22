import { Grid2, Typography } from "@mui/material";

export interface data {
  info: Info;
}
export interface Info {
  image: string;
  model: string;
  task: Task;
  altitude?: number;
  position: [number, number];
  currentAction: "patrol" | "transport" | "charging";
}
export interface Task {
  from: [number, number];
  to: [number, number];
  description: string;
  state: "in-progress" | "completed";
}
export function DroneInformation({ info }: data) {
  const { model, altitude, position, currentAction, image } = info;
  return (
    <Grid2 container spacing={10}>
      <Grid2>
        <div>
          <Typography variant="h6" sx={{ marginBottom: "8px" }}>
            Drone Information
          </Typography>
          <Typography variant="body1">Model: {model}</Typography>
          <Typography variant="body1">Altitude: {altitude}ft</Typography>
          <Typography variant="body1">
            Position: {position.join(", ")}
          </Typography>
          <Typography variant="body1">
            Current Action: {currentAction}
          </Typography>
        </div>
      </Grid2>
      <Grid2>
        <img
          src={image}
          style={{
            borderRadius: "50px",
            height: "100px",
            width: "100px",
          }}
        />
      </Grid2>
    </Grid2>
  );
}
