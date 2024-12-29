import {
  Collapse,
  Grid2,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { CustomButton } from "../MyCustomButton";
import { useState } from "react";
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
            "& .MuiInputBase-input": {
                color: "white",},
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
            label="Current Position of the Drone"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Where to (long, lat
                )"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Task decription"
            variant="outlined"
          />
        </Stack>
        <div style={{ marginTop: "10px" }}>
          <CustomButton
            text={"Confirm"}
            type={"navigate"}
            action={() => null}
            size={200}
          />
        </div>
      </Collapse>
    </ThemeProvider>
  );
}
