import { useState } from "react";
import { CustomButton } from "./MyCustomButton";
import { Collapse, Typography } from "@mui/material";

export function Task() {
  const [showTasks, setShowTasks] = useState(true);
  return (
    <div>
      <CustomButton
        text={showTasks ? "Hide Tasks" : "Show Tasks"}
        type={showTasks ? "stop" : "navigate"}
        action={() => setShowTasks(!showTasks)}
        size={200}
      />

      <Collapse in={showTasks}>
        <div style={{ marginTop: "20px" }}>
          <Typography variant="body1">Task: Deliver Amazon Package</Typography>
          <Typography variant="body2">From: 40, -75</Typography>
          <Typography variant="body2">To: 40, -72</Typography>
          <Typography variant="body2">Status: In Progress</Typography>
        </div>
      </Collapse>
    </div>
  );
}
