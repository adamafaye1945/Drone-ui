import {
  Collapse,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CustomizedRadios, { CustomButton } from "../MyCustomButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TaskObj } from "../../types/droneTypes";
import { taskChanged, TaskChanging } from "../../redux/slice/droneSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#86A788", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "#86A788", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "#86A788", // Focused border color
            },
          },
          "& .MuiInputLabel-root": {
            color: "#86A788", // Label color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#86A788", // Focused label color
          },
        },
      },
    },
  },
});
export function TaskCreation() {
  const focusedDrone = useSelector(
    (state: RootState) => state.drone.focusedDrone
  );
  const [showForm, setShowForm] = useState(false);
  const [position, setPosition] = useState("");
  const [altitude, setAltitude] = useState("");
  const [destination, setDestination] = useState("");
  const [taskSelection, setTaskSelection] = useState<
    "patrol" | "transport" | "charging"
  >("transport");
  const dispatch = useDispatch();

  function areAllNumbers(arr: string[]): boolean {
    return arr.every((item) => {
      const num = Number(item); // Explicit conversion to number
      return !isNaN(num) && item.trim() !== ""; // Ensure it's a valid number and not empty
    });
  }
  function convertBackToNumberArray(item: string[]): [number, number] {
    return [Number(item[0]), Number(item[1])];
  }
  function submitForm() {
    // position handling
    const positionState = position.split(",");
    const destinationState = destination.split(",");

    if (
      areAllNumbers(positionState) &&
      areAllNumbers(destinationState) &&
      focusedDrone
    ) {
      const finalStatePos = convertBackToNumberArray(positionState);
      const finalStateDestinationState =
        convertBackToNumberArray(destinationState);

      const task: TaskObj = {
        to: finalStateDestinationState,
        from: finalStatePos,
        description: "nothing for this yet",
        state: "in-progress",
      };
      const payload: TaskChanging = {
        task,
        id: focusedDrone.information.id,
        altitude: Number(altitude),
        currentAction: taskSelection,
      };
      dispatch(taskChanged(payload));
      setShowForm(false);
      return;
    }
    console.log("error entering information make sure you enter number");
    // handling where to
  }

  return (
    <ThemeProvider theme={theme}>
      <CustomButton
        text={showForm ? "Hide Task Creator" : "Create Task"}
        type={showForm ? "stop" : "navigate"}
        action={() => setShowForm(!showForm)}
        size={200}
      />{" "}
      <Collapse in={showForm} sx={{ marginTop: "10px" }}>
        <Stack spacing={3}>
          <TextField
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            id="outlined-basic"
            label="Pick-up location(lat, long)"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            onChange={(e) => setDestination(e.target.value)}
            id="outlined-basic"
            label="Where to (long, lat
                )"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            value={altitude}
            onChange={(e) => setAltitude(e.target.value)}
            id="outlined-basic"
            label="Set a cruise altitude"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">FT</InputAdornment>
                ),
              },
            }}
            variant="outlined"
            size="medium"
            sx={{ width: "100%" }}
          />

          <CustomizedRadios
            taskValue={taskSelection}
            setTaskValue={setTaskSelection}
          />
        </Stack>
        <div style={{ marginTop: "10px" }}>
          <CustomButton
            text={"Launch"}
            type={"navigate"}
            action={submitForm}
            size={200}
          >
            <FlightTakeoffIcon sx={{ padding: "10px" }}></FlightTakeoffIcon>
          </CustomButton>
        </div>
      </Collapse>
    </ThemeProvider>
  );
}
