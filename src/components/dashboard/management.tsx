import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  Pagination,
  Stack,
  Grid2,
} from "@mui/material";
import { Allinfo, Info } from "../../types/droneTypes";
import DroneFleetManagement from "../droneFleet/droneFleet";
import { useState } from "react";
import { DroneInformation } from "../DroneInfoFolder/DroneInformation";
import { Task } from "../task/task";
import { ChargingStation } from "../DroneInfoFolder/chargingStation";
import { CloseButton } from "../MyCustomButton";
import { TaskCreation } from "../task/createTask";
export function Management({ infos }: Allinfo) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [currentDisplayedDrone, setCurrentDisplayedDrone] = useState<Info>();
  console.log(currentPageNumber);
  // calculating number of element appearing in a page

  function CloseButtonclicked() {
    setCurrentDisplayedDrone(undefined);
  }
  function pageChanged(_: React.ChangeEvent<unknown>, page: number) {
    setCurrentPageNumber(page);
  }
  function paginate<T>(array: T[], page: number, itemsPerPage: number): T[] {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  }
  const paginatedInfos = paginate(infos, currentPageNumber, 9);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
        overflowY: "auto",
        padding: "16px",
      }}
    >
      <Stack
        direction={"row"}
        spacing={40}
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <DroneFleetManagement />{" "}
        {currentDisplayedDrone && <CloseButton onClose={CloseButtonclicked} />}
      </Stack>
      {currentDisplayedDrone ? (
        <Stack spacing={3}>
          <DroneInformation info={currentDisplayedDrone} />
          <Grid2 container spacing={3} justifyContent="space-between">
            <Grid2>
              <Task />
            </Grid2>
            <Grid2>
              <ChargingStation />
            </Grid2>
            <Grid2>
              <TaskCreation />
            </Grid2>
            <Grid2>
              <ChargingStation />
            </Grid2>
          </Grid2>
        </Stack>
      ) : (
        <List sx={{ width: "100%" }}>
          {paginatedInfos.map((info, index) => (
            <ListItemButton
              onClick={() => setCurrentDisplayedDrone(infos[index])}
            >
              <ListItem key={index} sx={{ borderBottom: "1px solid #333" }}>
                <ListItemAvatar>
                  <Avatar src="src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTA0Ni1wLnBuZw.webp"></Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={info.model}
                  secondary={info.currentAction}
                />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      )}
      {!currentDisplayedDrone && (
        <Pagination
          onChange={pageChanged}
          page={currentPageNumber}
          count={Math.ceil(infos.length / 9)}
          size="large"
          variant="outlined"
          sx={{
            position: "fixed",
            bottom: "0",
            marginBottom: "10px",
            "& .MuiPaginationItem-root": {
              color: "#86A788",
              borderColor: "#86A788",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#86A788",
              color: "white",
            },
          }}
        />
      )}
    </Box>
  );
}
