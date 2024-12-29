import { Grid2 } from "@mui/material";
import LeafletMap from "../components/dashboard/map";
import { Management } from "../components/dashboard/management";
import { Allinfo } from "../types/droneTypes";
const FAKE_DRONE: Allinfo = {
  infos: [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
  ],
};
export function DashBoard() {
  return (
    <Grid2 container>
      <Grid2 size={4}>
        <Management infos={FAKE_DRONE.infos} />
      </Grid2>
      <Grid2 size={8}>
        <LeafletMap />
      </Grid2>
    </Grid2>
  );
}
