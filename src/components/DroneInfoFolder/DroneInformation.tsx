import { Grid2, Typography } from "@mui/material";
import {
  DeployedDroneInformation,
  DroneInformation,
} from "../../types/droneTypes";
interface InfoProps {
  info: DeployedDroneInformation;
}
export function DroneInformationComponent({ info }: InfoProps) {
  const { model, image } = info.information;
  const { position, currentAction, altitude } = info;
  return (
    <div style={{ marginTop: "20px" }}>
      <Grid2
        container
        spacing={4}
        display={"flex"}
        justifyContent="space-between"
      >
        <Grid2>
          <div>
            {/* <Typography variant="h6" sx={{ marginBottom: "8px" }}>
            Drone Information
          </Typography> */}
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
    </div>
  );
}
