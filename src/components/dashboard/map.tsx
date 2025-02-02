import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { chargingStation, droneIcon } from "../../map/icon";
import { Drawline } from "../../map/drawing";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";

const MapViewUpdater = ({ position }: { position: [number, number] }) => {
  const map = useMap(); // Access the map instance

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom(), { animate: true });
    }
  }, [position, map]);

  return null; // No UI needed, just updates the map
};

const LeafletMap = () => {
  const focusedDrone = useSelector(
    (state: RootState) => state.drone.focusedDrone
  );
  const allDrones = useSelector((state: RootState) => state.drone.deployed);

  const start: [number, number] = [40.71, -74];
  const charging: [number, number] = [40.61, -74];
  return (
    <MapContainer
      center={start}
      zoom={13}
      style={{ height: "100vh", width: "100%", position: "fixed" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    
      {focusedDrone && <MapViewUpdater position={focusedDrone.position} />}
      {focusedDrone && <Drawline drone={focusedDrone} />}

      {allDrones &&
        allDrones.map((singleDrone) => (
          <Marker position={singleDrone.position} icon={droneIcon}>
            <Popup>{singleDrone.information.model}</Popup>
          </Marker>
        ))}
      <Marker position={charging} icon={chargingStation}>
        <Popup>charging station detected!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
