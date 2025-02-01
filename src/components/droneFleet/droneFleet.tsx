import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import React from "react";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { CustomButton } from "../MyCustomButton";
import DataTable from "./tableFleet";
import { useState } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { deployDrones } from "../../redux/slice/droneSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function DroneFleetManagement() {
  const [rowSelected, setRowSelected] = useState<GridRowSelectionModel>();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function RemakeDataAndDeployDrone(row: GridRowSelectionModel | undefined) {
    if (row) {
      const rowSelectedSet = new Set(row);
      dispatch(deployDrones(rowSelectedSet));
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const executeFunc = () => {
    setOpen(false);
    RemakeDataAndDeployDrone(rowSelected);
  };

  return (
    <React.Fragment>
      <CustomButton
        text="Open Fleet"
        type="navigate"
        action={handleClickOpen}
      />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Drone Fleet
            </Typography>
            <Button autoFocus color="inherit" onClick={executeFunc}>
              Execute
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <DataTable setRowSelected={setRowSelected} />
        </List>
      </Dialog>
    </React.Fragment>
  );
}
