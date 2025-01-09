import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { chargingStation, droneIcon } from "../../map/icon";
import { Drawline } from "../../map/drawing";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

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
      {focusedDrone && <Drawline drone={focusedDrone} />}

      {allDrones &&
        allDrones.map((singleDrone) => (
          <Marker position={singleDrone.position} icon={droneIcon}>
            <Popup>Drone connected!</Popup>
          </Marker>
        ))}
      <Marker position={charging} icon={chargingStation}>
        <Popup>charging station detected!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
