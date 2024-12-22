import React from "react";
import Header from "../components/Header";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "../components/MyCustomButton";

export const Main: React.FC = () => {
  let nav = useNavigate();
  function navigate() {
    nav("/dashboard");
  }
  return (
    <div className="main">
     
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
        <CustomButton
          action={navigate}
          text="Start the Application"
          size={400}
          type="navigate"
        />
      </Stack>
    </div>
  );
};
