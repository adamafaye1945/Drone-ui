import {
  Box,
  List,
  ListItemButton,
  Pagination,
  Stack,
  Grid2,
} from "@mui/material";
import DroneFleetManagement from "../droneFleet/droneFleet";
import { useEffect, useState } from "react";
import { Task } from "../task/task";
import { ChargingStation } from "../DroneInfoFolder/chargingStation";
import { CloseButton, CustomButton } from "../MyCustomButton";
import { TaskCreation } from "../task/createTask";
import { DroneInformationComponent } from "../DroneInfoFolder/DroneInformation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { groundDrone, setFocusedDrone } from "../../redux/slice/droneSlice";
import { DeployedDroneItem } from "./deployedDroneItem";
import { selectFilteredDrones } from "../../redux/derivedState";
import { Search } from "./Search";

export function Management() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const currentDisplayedDrone = useSelector(
    (state: RootState) => state.drone.focusedDrone
  );
  const dispatch = useDispatch();

  const drones = useSelector(selectFilteredDrones);
  // make sure currentDisplayed drone reflect changes that happened in the redux state
  useEffect(() => {
    if (currentDisplayedDrone) {
      const updatedDrone = drones.find(
        (drone) => drone.information.id === currentDisplayedDrone.information.id
      );
      if (updatedDrone) {
        dispatch(setFocusedDrone(updatedDrone));
      }
    }
  }, [drones]);
  // calculating number of element appearing in a page
  function droneGrounding() {
    if (currentDisplayedDrone) {
      dispatch(groundDrone(currentDisplayedDrone));
      CloseButtonclicked();
    }
  }
  function CloseButtonclicked() {
    dispatch(setFocusedDrone(undefined));
  }
  function pageChanged(_: React.ChangeEvent<unknown>, page: number) {
    setCurrentPageNumber(page);
  }
  function paginate<T>(array: T[], page: number, itemsPerPage: number): T[] {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  }
  const paginatedInfos = paginate(drones, currentPageNumber, 9);
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
        spacing={13}
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <DroneFleetManagement />

        {currentDisplayedDrone ? (
          <CloseButton onClose={CloseButtonclicked} />
        ) : (
          <Search />
        )}
      </Stack>
      {currentDisplayedDrone ? (
        <Stack spacing={3}>
          <DroneInformationComponent info={currentDisplayedDrone} />
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
              <CustomButton
                text="Ground Drone"
                size={200}
                type="navigate"
                action={droneGrounding}
              />
            </Grid2>
          </Grid2>
        </Stack>
      ) : (
        <List sx={{ width: "100%" }}>
          {paginatedInfos.map((info, index) => (
            <ListItemButton onClick={() => dispatch(setFocusedDrone(info))}>
              <DeployedDroneItem info={info} index={index} />
            </ListItemButton>
          ))}
        </List>
      )}
      {!currentDisplayedDrone && (
        <Pagination
          onChange={pageChanged}
          page={currentPageNumber}
          count={Math.ceil(drones.length / 9)}
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
