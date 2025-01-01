import { ReactNode } from "react";

export interface ButtonInterface {
  text: string;
  type: "stop" | "navigate";
  size: number;
  action?: () => void;
  children?: ReactNode;
}

export interface DroneInformation {
  charge: number;
  id: string;
  image: string;
  size: "small" | "medium" | "large";
  model: string;
  carrying?: null | number;
}
export interface DeployedDroneInformation {
  information: DroneInformation;
  task: TaskObj;
  altitude?: number;
  position: [number, number];
  currentAction: "patrol" | "transport" | "charging";
}
export interface GroundedDroneInformation {
  information: DroneInformation;
  availability: "Available" | "In maintenance" | "Non-operational";
}

export interface TaskObj{
  from: [number, number];
  to: [number, number];
  description: string;
  state: "in-progress" | "completed";
}
