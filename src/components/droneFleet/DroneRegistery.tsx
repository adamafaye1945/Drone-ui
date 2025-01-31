import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CustomButton } from "../MyCustomButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { theme } from "../../form/theme";
import { useState } from "react";
import {
  areAllNumbers,
  convertBackToNumberArray,
  generateRandomID,
} from "../../form/validation";
import { GroundedDroneInformation } from "../../types/droneTypes";
import { useDispatch } from "react-redux";
import { addDrone } from "../../redux/slice/droneSlice";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
type sizeType = "small" | "medium" | "large";
interface DroneRegisteryProps {
  setDisplayDroneRegistery: (display: boolean) => void;
}
export function DroneRegistry({
  setDisplayDroneRegistery,
}: DroneRegisteryProps) {
  const dispatch = useDispatch();
  const [model, setModel] = useState("");
  const [baseLocation, setBaseLocation] = useState("");
  const [size, setSize] = useState("");
  const [carry, setCarry] = useState(false);
  async function FormSubmission() {
    const base_string = baseLocation.split(",");
    if (!areAllNumbers(base_string)) {
      console.log("base location format is not valid");
      return;
    }
    const baseArray = convertBackToNumberArray(base_string);
    const groundedDroneObj: GroundedDroneInformation = {
      information: {
        base: baseArray,
        model,
        id: generateRandomID(),
        charge: 100,
        image: "src/assets/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
        size: size as sizeType,
      },
      availability: "Available",
    };
    await dispatch(addDrone(groundedDroneObj));
    setDisplayDroneRegistery(false);
    return;
  }
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ marginTop: "20px" }} spacing={3}>
        <Typography fontSize={25}>Drone Registration Form</Typography>
        <Stack direction={"row"} spacing={3} sx={{ marginTop: "20px" }}>
          <TextField
            value={model}
            onChange={(e) => setModel(e.target.value)}
            id="outlined-basic"
            label="Enter Drone Model"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            value={baseLocation}
            onChange={(e) => setBaseLocation(e.target.value)}
            label="Where is the drone based (lat, long) "
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Stack>
        <Stack direction={"row"} spacing={3}>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel>Drone Size</InputLabel>
            <Select
              label="size of the Drone"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={carry}
                onChange={(e) => setCarry(e.target.checked)}
                sx={{
                  color: "#86A788",
                  "&.Mui-checked": {
                    color: "#86A788",
                  },
                  "&.MuiCheckbox-root:hover": {
                    backgroundColor: "rgba(134, 167, 136, 0.1)",
                  },
                }}
                defaultChecked
              />
            }
            label="Can Carry Object?"
          />
        </Stack>

        <Button
          sx={{ backgroundColor: "#86A788", maxWidth: "50%" }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload a picture of the drone
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
        <CustomButton
          text="Register"
          type="navigate"
          size={200}
          action={FormSubmission}
        />
      </Stack>
    </ThemeProvider>
  );
}
