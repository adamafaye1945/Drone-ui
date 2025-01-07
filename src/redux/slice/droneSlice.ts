// src/features/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DeployedDroneInformation,
  GroundedDroneInformation,
  TaskObj,
} from "../../types/droneTypes";

export interface TaskChanging {
  task: TaskObj;
  altitude: number;
  id: string;
  currentAction: "patrol" | "transport" | "charging" | "standby";
}
interface stateType {
  focusedDrone: DeployedDroneInformation | undefined;
  grounded: GroundedDroneInformation[];
  deployed: DeployedDroneInformation[];
}
// export interface  StateType {
//   currentDisplayedDrone : DeployedDroneInformation

// }
const initialState: stateType = {
  focusedDrone: undefined,
  deployed: [
    {
      task: null,
      information: {
        charge: 30,
        id: "1234",
        image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
        model: "seria12323",
        size: "small",
      },
      position: [40.71, -74],
      altitude: 120,
      base: [40.71, -74],
      currentAction: "standby",
    },
  ],
  grounded: [],
};

const DeployedDroneSlice = createSlice({
  name: "Drone",
  initialState,
  reducers: {
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
    TaskChanged: (state, action: PayloadAction<TaskChanging>) => {
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

export const { addDrone, TaskChanged, setFocusedDrone } =
  DeployedDroneSlice.actions;

export default DeployedDroneSlice.reducer;
