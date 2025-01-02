import { configureStore } from "@reduxjs/toolkit";
import DeployedDroneSlice from "../slice/droneSlice";

const store = configureStore({
  reducer: {
    drone: DeployedDroneSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
