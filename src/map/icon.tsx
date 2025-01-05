import L from "leaflet";
import droneImage from "../assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg";
// Path to your drone image
import charging from "../assets/charging.svg";
import box from "../assets/box.svg";
import startIcon from "../assets/start.svg";
export const droneIcon = new L.Icon({
  iconUrl: droneImage, // Path to the custom image
  iconSize: [30, 30], // Size of the icon [width, height]
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: "custom-icon",
});
export const chargingStation = new L.Icon({
  iconUrl: charging,
  iconSize: [30, 30],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: "custom-icon",
});
export const TransportIcon = new L.Icon({
  iconUrl: box,
  iconSize: [30, 30],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: "custom-icon",
});
export const start = new L.Icon({
  iconUrl: startIcon,
  iconSize: [30, 30],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: "custom-icon",
});
