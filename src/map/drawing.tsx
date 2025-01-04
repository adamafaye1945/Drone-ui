import { Marker, Polyline } from "react-leaflet";
import { TransportIcon } from "./icon";

export interface DrawProps {
  pointA: [number, number];
  pointB: [number, number];
  color: string;
}

export function Drawline({ pointA, pointB, color }: DrawProps) {
  const colorOptions = { color };

  const line = [pointA, pointB];
  return (
    <>
      <Polyline pathOptions={colorOptions} positions={line} />
      <Marker icon={TransportIcon} position={pointB} />
    </>
  );
}
