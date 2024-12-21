import React from "react";
import Header from "../components/Header";
import { Box, Button, Grid2, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Stack
        spacing={12}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          "& a": {
            textDecoration: "none",
            color: "inherit",
          },
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "400px", backgroundColor: "#86A788" }}
        >
          <Link to={"/dashboard"}>Start the application</Link>
        </Button>
      </Stack>
    </div>
  );
};
