import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { chargingStation, droneIcon } from "../../map/icon";
import { Drawline } from "../../map/drawing";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const LeafletMap = () => {
  const start: [number, number] = [40.71, -74];
  const charging: [number, number] = [40.61, -74];
  const drones = useSelector((state: RootState) => state.drone.deployed);
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
      {drones.map((drone) => (
        <div>
          <Marker position={drone.position} icon={droneIcon} />
          <Drawline drone={drone} />
        </div>
      ))}

      <Marker position={start} icon={droneIcon}>
        <Popup>Drone connected!</Popup>
      </Marker>
      <Marker position={charging} icon={chargingStation}>
        <Popup>charging station detected!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
