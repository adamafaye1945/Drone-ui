import { Grid2, Stack } from "@mui/material";
import { DroneInformationComponent } from "../DroneInfoFolder/DroneInformation";
import { Task } from "../task/task";
import { ChargingStation } from "../DroneInfoFolder/chargingStation";
import { CustomButton } from "../MyCustomButton";
import { TaskCreation } from "../task/createTask";
import { DeployedDroneInformation } from "../../types/droneTypes";
interface SingleDroneManagerProps {
  currentDisplayedDrone: DeployedDroneInformation;
  droneGrounding: () => void;
}
export function SingleDroneManager({
  currentDisplayedDrone,
  droneGrounding,
}: SingleDroneManagerProps) {
  return (
    <Stack spacing={3}>
      <DroneInformationComponent info={currentDisplayedDrone} />
      <Grid2 container spacing={3} justifyContent="space-between">
        <Grid2>
          <Task />
        </Grid2>
        <Grid2>
          <ChargingStation />
        </Grid2>
        <Grid2>
          <TaskCreation />
        </Grid2>
        <Grid2>
          <CustomButton
            text="Ground Drone"
            size={200}
            type="navigate"
            action={droneGrounding}
          />
        </Grid2>
      </Grid2>
    </Stack>
  );
}
