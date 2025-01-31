import { TextField, ThemeProvider, InputAdornment } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/slice/droneSlice";
import { theme } from "../../form/theme";

export function Search() {
  const dispatch = useDispatch();
  const [searchElement, setSearchElement] = useState("");
  useEffect(() => {
    dispatch(setSearchQuery(searchElement));
  }, [searchElement]);
  // create a search mechanism from drone based on what being type
  // so that mean i need a global state to give to management
  // management should see that state, filter the drones that are displayed
  // sounds like we should filter but keep like a copy of the state.
  //
  return (
    <ThemeProvider theme={theme}>
      <TextField
        value={searchElement}
        onChange={(e) => setSearchElement(e.target.value)}
        id="outlined-basic"
        label="Look up for a drone"
        variant="outlined"
        sx={{ width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment style={{ color: "white" }} position="start">
              <ManageSearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
}
