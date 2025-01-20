// src/features/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DeployedDroneInformation,
  GroundedDroneInformation,
  TaskObj,
} from "../../types/droneTypes";
import { GridRowId } from "@mui/x-data-grid";

export interface TaskChanging {
  task: TaskObj;
  altitude: number;
  id: string;
  currentAction: "patrol" | "transport" | "charging" | "standby";
}
interface stateType {
  searchQuery: string;
  focusedDrone: DeployedDroneInformation | undefined;
  grounded: GroundedDroneInformation[];
  deployed: DeployedDroneInformation[];
}
// export interface  StateType {
//   currentDisplayedDrone : DeployedDroneInformation

// }
const initialState: stateType = {
  searchQuery: "",
  focusedDrone: undefined,
  deployed: [
    {
      task: null,
      information: {
        charge: 30,
        id: "124",
        image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
        model: "seria124",
        size: "small",
        base: [40.71, -74],
      },
      position: [41.71, -74.8],
      altitude: 120,
      currentAction: "standby",
    },
    {
      task: null,
      information: {
        charge: 30,
        id: "14",
        image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
        model: "seria12",
        size: "small",
        base: [40.71, -74],
      },
      position: [40.71, -74.9],
      altitude: 120,
      currentAction: "standby",
    },
    {
      task: null,
      information: {
        charge: 30,
        id: "12",
        image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
        model: "seria10023",
        size: "small",
        base: [40.71, -74],
      },
      position: [40.71, -74.8],
      altitude: 120,
      currentAction: "standby",
    },
  ],
  grounded: [
    {
      information: {
        id: "1212",
        model: "seria1902",
        charge: 3,
        image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
        size: "medium",
        carrying: 10,
        base: [40.71, -74],
      },
      availability: "Available", // Correct spelling
    },
  ],
};

const DeployedDroneSlice = createSlice({
  name: "Drone",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFocusedDrone: (
      state,
      action: PayloadAction<DeployedDroneInformation | undefined>
    ) => {
      state.focusedDrone = action.payload;
    },
    addDrone: (state, action: PayloadAction<DeployedDroneInformation>) => {
      state.deployed.push(action.payload);
    },
    groundDrone: (state, action: PayloadAction<DeployedDroneInformation>) => {
      const { information } = action.payload;
      state.deployed = state.deployed.filter(
        (drone) => drone.information.id !== information.id
      );

      const deployed2Grounded: GroundedDroneInformation = {
        information,
        availability: "Available",
      };
      state.grounded.push(deployed2Grounded);
    },
    // this deploy multiple drone given id
    deployDrones: (state, action: PayloadAction<Set<GridRowId>>) => {
      //copy
      const deployedDroneFromGround: GroundedDroneInformation[] =
        state.grounded.filter((drone) =>
          action.payload.has(drone.information.id)
        );
      const deployedDroneFromGroundTodeploy: DeployedDroneInformation[] =
        deployedDroneFromGround.map((drone) => ({
          information: drone.information,
          task: null,
          altitude: 0,
          position: drone.information.base,
          currentAction: "standby",
        }));
      state.deployed.push(...deployedDroneFromGroundTodeploy);
      state.grounded = state.grounded.filter(
        (drone) => !action.payload.has(drone.information.id)
      );
    },
    taskChanged: (state, action: PayloadAction<TaskChanging>) => {
      const { id, task, altitude, currentAction } = action.payload;

      const index = state.deployed.findIndex(
        (drone) => drone.information.id === id
      );
      state.deployed[index].task = task;
      state.deployed[index].altitude = altitude;
      state.deployed[index].currentAction = currentAction;
    },
  },
});

export const {
  addDrone,
  taskChanged,
  setFocusedDrone,
  deployDrones,
  groundDrone,
  setSearchQuery,
} = DeployedDroneSlice.actions;

export default DeployedDroneSlice.reducer;
