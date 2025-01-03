import { Grid2 } from "@mui/material";
import LeafletMap from "../components/dashboard/map";
import { Management } from "../components/dashboard/management";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

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
