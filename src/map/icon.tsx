import L from "leaflet";
import droneImage from "../assets/vector-drone-icon-symbol-design-600nw-2312605119.webp"; // Path to your drone image
import charging from "../assets/charging.svg";
export const droneIcon = new L.Icon({
  iconUrl: droneImage, // Path to the custom image
  iconSize: [30, 30], // Size of the icon [width, height]
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: "custom-icon",
});
export const chargingStation = new L.Icon({
  iconUrl: charging, // Path to the custom image
  iconSize: [30, 30], // Size of the icon [width, height]
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: "custom-icon",
});
