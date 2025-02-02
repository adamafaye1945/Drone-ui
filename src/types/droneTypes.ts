import React, { ReactNode } from "react";

export interface ButtonInterface {
  sx?: React.CSSProperties;
  text: string;
  type: "stop" | "navigate";
  size?: number;
  action?: () => void;
  children?: ReactNode;
}

export interface DroneInformation {
  charge: number;
  id: string;
  image: string;
  size: "small" | "medium" | "large" | undefined;
  model: string;
  carrying?: null | number;
  base: [number, number];
}
export interface DeployedDroneInformation {
  information: DroneInformation;
  task: TaskObj | null;
  altitude?: number;
  position: [number, number];
  currentAction: "patrol" | "transport" | "charging" | "standby";
}
export interface GroundedDroneInformation {
  information: DroneInformation;
  availability: "Available" | "In maintenance" | "Non-operational";
}

export interface TaskObj {
  from: [number, number];
  to: [number, number];
  description: string;
  state: "in-progress" | "completed";
}
