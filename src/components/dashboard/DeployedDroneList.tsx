import { List, ListItemButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFocusedDrone } from "../../redux/slice/droneSlice";
import { DeployedDroneItem } from "./deployedDroneItem";
import { DeployedDroneInformation } from "../../types/droneTypes";
interface DroneListProps {
  paginatedInfos: DeployedDroneInformation[];
}
export function DeployedDroneList({ paginatedInfos }: DroneListProps) {
  const dispatch = useDispatch();
  return (
    <List sx={{ width: "100%" }}>
      {paginatedInfos.map((info, index) => (
        <ListItemButton onClick={() => dispatch(setFocusedDrone(info))}>
          <DeployedDroneItem info={info} index={index} />
        </ListItemButton>
      ))}
    </List>
  );
}
