import { createTheme } from "@mui/material";

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
            color: "#86A788", // Default label color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#86A788", // Focused label color
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "white", // Select text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#86A788", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#86A788", // Hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#86A788", // Focused border color
          },
        },
        icon: {
          color: "#86A788", // Dropdown arrow color
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#86A788", // Default border
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#86A788", // Hover border
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#86A788", // Focused border
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#86A788 !important", // Default label color
        },
        focused: {
          color: "#86A788 !important", // Focused label color
        },
      },
    },
  },
});
