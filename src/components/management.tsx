import { Divider, Stack } from "@mui/material";

import { DroneInformation, data } from "./DroneInformation";
import { Task } from "./task";
import { ChargingStation } from "./chargingStation";
import DroneFleetManagement from "./droneFleet";

const FAKE_DRONE: data = {
  info: {
    task: {
      from: [40, -75],
      to: [40, -72],
      description: "Sending Amazon package to a nearby house",
      state: "in-progress",
    },
    image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
    model: "seria12323",
    altitude: 120,
    position: [40, -75],
    currentAction: "patrol",
  },
};

export function Management() {
  return (
    <Stack
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={4}
      sx={{
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
        padding: "16px",
        overflowY: "auto",
      }}
    >
      <DroneInformation info={FAKE_DRONE.info} />

      <Task />

      <ChargingStation />
      <DroneFleetManagement />
    </Stack>
  );
}
