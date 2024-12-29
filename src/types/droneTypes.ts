import { ReactNode } from "react";

export interface ButtonInterface {
  text: string;
  type: "stop" | "navigate";
  size: number;
  action?: () => void;
  children?: ReactNode;
}

export interface Allinfo {
  infos: Info[];
}
export interface Info {
  image: string;
  model: string;
  task: Task;
  altitude?: number;
  position: [number, number];
  currentAction: "patrol" | "transport" | "charging";
}
export interface Task {
  from: [number, number];
  to: [number, number];
  description: string;
  state: "in-progress" | "completed";
}
