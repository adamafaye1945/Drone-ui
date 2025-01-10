import {
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { DeployedDroneInformation } from "../../types/droneTypes";
interface DeployedDroneItemProps {
  info: DeployedDroneInformation;
  index: number;
}
export function DeployedDroneItem({ info, index }: DeployedDroneItemProps) {
  const currentActionColor = {
    transport: "green",
    patrol: "yellow",
    standby: "grey",
    charging: "red",
  };
  return (
    <ListItemText key={index} sx={{ borderBottom: "1px solid #333" }}>
      <div style={{ display: "flex" }}>
        <ListItemAvatar>
          <Avatar src="src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTA0Ni1wLnBuZw.webp"></Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ color: "white" }}
          primary={info.information.model}
          secondary={info.currentAction}
          secondaryTypographyProps={{
            style: { color: currentActionColor[info.currentAction] },
          }}
        />
      </div>
    </ListItemText>
  );
}
