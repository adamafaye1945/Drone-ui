import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../components/MyCustomButton";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  function nav() {
    navigate("/dashboard");
  }
  return (
    <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Blurred Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("https://i.gifer.com/7N1e.gif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(3px)",
          zIndex: 1,
        }}
      />

      {/* Foreground Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Above the blurred background
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack
          spacing={12}
          sx={{
            alignItems: "center",
            "& a": {
              textDecoration: "none",
              color: "inherit",
            },
          }}
        >
          <Typography variant="h3" color="white" textAlign="center">
            Welcome to your Drone Management System, Adama!
          </Typography>
          <CustomButton
            action={nav}
            text="Start the Application"
            size={400}
            type="navigate"
          />
        </Stack>
      </Box>
    </Box>
  );
};
