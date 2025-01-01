// src/features/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeployedDroneInformation, TaskObj } from "../../types/droneTypes";

interface TaskChanging {
  task: TaskObj;
  id: string;
}
const initialState: DeployedDroneInformation[] = [
  {
    task: {
      from: [40, -75],
      to: [40, -72],
      description: "Sending Amazon package to a nearby house",
      state: "in-progress",
    },
    information: {
      charge: 30,
      id: "1234",
      image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
      model: "seria12323",
      size: "small",
    },

    altitude: 120,
    position: [40, -75],
    currentAction: "patrol",
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
      const { id, task } = action.payload;
      const droneIndex = state.findIndex((d) => d.information.id === id);
      if (droneIndex !== -1) {
        state[droneIndex].task = task;
      }
    },
  },
});

// Export actions and reducer
export const { addDrone, TaskChanged } = DeployedDroneSlice.actions;

export default DeployedDroneSlice.reducer;
