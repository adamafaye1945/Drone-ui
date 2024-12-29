import {
  Collapse,
  Grid2,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CustomizedRadios, { CustomButton } from "../MyCustomButton";
import { useState } from "react";
const theme = createTheme({
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
  const [showForm, setShowForm] = useState(false);
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
            id="outlined-basic"
            label="Position of the Drone(lat, long)"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Where to (long, lat
                )"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
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

          <CustomizedRadios />
        </Stack>
        <div style={{ marginTop: "10px" }}>
          <CustomButton
            text={"Launch"}
            type={"navigate"}
            action={() => null}
            size={200}
          >
            <FlightTakeoffIcon sx={{ padding: "10px" }}></FlightTakeoffIcon>
          </CustomButton>
        </div>
      </Collapse>
    </ThemeProvider>
  );
}
