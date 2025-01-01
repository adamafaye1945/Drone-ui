import { Grid2 } from "@mui/material";
import LeafletMap from "../components/dashboard/map";
import { Management } from "../components/dashboard/management";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export function DashBoard() {
  const drones = useSelector((state: RootState) => state.drone);
  return (
    <Grid2 container>
      <Grid2 size={4}>
        <Management infos={drones} />
      </Grid2>
      <Grid2 size={8}>
        <LeafletMap />
      </Grid2>
    </Grid2>
  );
}
