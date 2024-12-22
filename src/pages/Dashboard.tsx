import { Grid2 } from "@mui/material";
import LeafletMap from "../components/map";
import { Management } from "../components/management";

export function DashBoard() {
  return (
    <Grid2 container>
      <Grid2 size={4}>
        <Management />
      </Grid2>
      <Grid2 size={8}>
        <LeafletMap />
      </Grid2>
    </Grid2>
  );
}
