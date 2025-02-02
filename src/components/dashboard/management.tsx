import { Box, Stack } from "@mui/material";
import DroneFleetManagement from "../droneFleet/droneFleet";
import { useEffect, useState } from "react";
import { CloseButton, CustomButton } from "../MyCustomButton";
import { useDispatch, useSelector } from "react-redux";
import { groundDrone, setFocusedDrone } from "../../redux/slice/droneSlice";
import { searchTrie, selectFilteredDrones } from "../../redux/derivedState";
import { Search } from "../search/Search";
import { RootState } from "../../redux/store/store";
import { SingleDroneManager } from "./SingleDroneManager";
import { DeployedDroneList } from "./DeployedDroneList";
import { PaginationComponent } from "./Pagination";
import { DroneRegistry } from "../droneFleet/DroneRegistery";
import { Feedback } from "../stuffLIKEALERT/alert";
export function Management() {
  const [feedbackopen, setFeedBackOpen] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [displayDroneRegistery, setDisplayDroneRegistery] = useState(false);
  const currentDisplayedDrone = useSelector(
    (state: RootState) => state.drone?.focusedDrone
  );
  const dispatch = useDispatch();
  const drones = useSelector(selectFilteredDrones);
  const trie = useSelector(searchTrie);
  // insert in trie for quick search
  // make sure currentDisplayed drone reflect changes that happened in the redux state
  useEffect(() => {
    if (!drones || !currentDisplayedDrone) return;

    const updatedDrone = trie.search(currentDisplayedDrone.information.model);

    if (updatedDrone) {
      dispatch(setFocusedDrone(updatedDrone[0]));
    }
  }, [drones, currentDisplayedDrone, dispatch]);

  // calculating number of element appearing in a page
  function handlefeedbackOpening() {
    setFeedBackOpen(true);
  }
  function handlefeedbackClose() {
    setFeedBackOpen(false);
  }
  function registeryDisplaying() {
    setDisplayDroneRegistery(!displayDroneRegistery);
  }
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
  const paginatedInfos = drones ? paginate(drones, currentPageNumber, 9) : [];
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
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <DroneFleetManagement />
        {currentDisplayedDrone ? (
          <CloseButton onClose={CloseButtonclicked} />
        ) : (
          <>
            <CustomButton
              text={
                !displayDroneRegistery ? "Register Drone" : "Close Registery"
              }
              type={!displayDroneRegistery ? "navigate" : "stop"}
              action={registeryDisplaying}
            />
            <Search />
          </>
        )}
      </Stack>

      {currentDisplayedDrone ? (
        <SingleDroneManager
          currentDisplayedDrone={currentDisplayedDrone}
          droneGrounding={droneGrounding}
        />
      ) : displayDroneRegistery ? (
        <DroneRegistry
          handleFeedbackOpen={handlefeedbackOpening}
          setDisplayDroneRegistery={setDisplayDroneRegistery}
        />
      ) : (
        <>
          <DeployedDroneList paginatedInfos={paginatedInfos} />
          <Feedback
            handleClose={handlefeedbackClose}
            message="Drone has been successfully added to fleet!"
            open={feedbackopen}
          />
        </>
      )}
      {!currentDisplayedDrone && drones && (
        <PaginationComponent
          drones={drones}
          currentPageNumber={currentPageNumber}
          pageChanged={pageChanged}
        />
      )}
    </Box>
  );
}
