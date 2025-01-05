import { Marker, Polyline } from "react-leaflet";
import { TransportIcon, start } from "./icon";
import { DeployedDroneInformation } from "../types/droneTypes";
export interface DrawProps {
  drone: DeployedDroneInformation;
}

export function Drawline({ drone }: DrawProps) {
  const colorOptions = { color: "black" };
  // if at base we start at the a
  const line = [drone.position, drone.task?.from, drone.task?.to].filter(
    (position): position is [number, number] =>
      position !== undefined && position !== null
  );
  console.log(line);
  return (
    <>
      <Polyline pathOptions={colorOptions} positions={line} />

      {drone.task && (
        <>
          <Marker icon={TransportIcon} position={drone.task.to} />
          <Marker icon={start} position={drone.task.from} />
        </>
      )}
    </>
  );
}
