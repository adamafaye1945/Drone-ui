// src/features/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeployedDroneInformation, TaskObj } from "../../types/droneTypes";

export interface TaskChanging {
  task: TaskObj;
  altitude: number;
  id: string;
  currentAction: "patrol" | "transport" | "charging" | "standby";
}
// export interface  StateType {
//   currentDisplayedDrone : DeployedDroneInformation

// }
const initialState: DeployedDroneInformation[] = [
  {
    task: {
      from: [40, -75],
      to: [40, -72],
      description: "Sending Amazon package to a nearby house",
      state: "completed",
    },
    information: {
      charge: 30,
      id: "1234",
      image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
      model: "seria12323",
      size: "small",
    },
    position: [40, -75],
    altitude: 120,
    base: [40, -75],
    currentAction: "standby",
  },
];

const DeployedDroneSlice = createSlice({
  name: "Drone",
  initialState,
  reducers: {
    addDrone: (state, action: PayloadAction<DeployedDroneInformation>) => {
      state.push(action.payload);
    },
    TaskChanged: (state, action: PayloadAction<TaskChanging>) => {
      const { id, task, altitude, currentAction } = action.payload;
      return state.map((drone) =>
        drone.information.id === id
          ? {
              ...drone,
              task,
              altitude,
              currentAction,
            }
          : drone
      );
    },
  },
});

export const { addDrone, TaskChanged } = DeployedDroneSlice.actions;

export default DeployedDroneSlice.reducer;
