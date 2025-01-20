import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store/store";
import { DeployedDroneInformation } from "../types/droneTypes";

const deployedDrone = (state: RootState) => state.drone.deployed;
const searchQuery = (state: RootState) => state.drone.searchQuery;
export const selectFilteredDrones = createSelector(
  [deployedDrone, searchQuery],
  (deployedDrones, searchQuery) => {
    if (!searchQuery) return deployedDrones;
    return deployedDrones.filter((drone: DeployedDroneInformation) =>
      drone.information.model.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);
