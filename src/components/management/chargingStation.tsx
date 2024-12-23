import { useState } from "react";
import { CustomButton } from "../MyCustomButton";
import { Collapse, Typography } from "@mui/material";
import EvStationIcon from "@mui/icons-material/EvStation";

export function ChargingStation() {
  const [showStations, setShowStations] = useState(false);
  return (
    <div>
      <CustomButton
        text={
          showStations ? "Hide Charging Stations" : "Show Charging Stations"
        }
        type={showStations ? "stop" : "navigate"}
        action={() => setShowStations(!showStations)}
        size={200}
      />

      <Collapse in={showStations}>
        <div style={{ marginTop: "20px" }}>
          <Typography variant="body1">
            Station 2: occupied
            <EvStationIcon sx={{ color: "red" }} />
          </Typography>
          <Typography variant="body1">
            Station 2: Open <EvStationIcon sx={{ color: "green" }} />
          </Typography>
        </div>
      </Collapse>
    </div>
  );
}
