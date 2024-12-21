import React from "react";
import Header from "../components/Header";
import { Box, Button, Grid2, Stack } from "@mui/material";

export const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Stack
        spacing={12}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height:"100vh",
          color: "blue",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "400px", backgroundColor: "#86A788" }}
        >
          Start The Application
        </Button>
      </Stack>
    </div>
  );
};
