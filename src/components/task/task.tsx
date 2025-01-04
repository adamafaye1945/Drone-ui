import { useState } from "react";
import { CustomButton } from "../MyCustomButton";
import { Collapse, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
interface TaskProps {
  id: string;
}
export function Task({ id }: TaskProps) {
  const [showTasks, setShowTasks] = useState(false);
  const drone = useSelector((state: RootState) =>
    state.drone.find((element) => element.information.id === id)
  );
  return (
    <div>
      <CustomButton
        text={showTasks ? "Hide Tasks" : "Show Tasks"}
        type={showTasks ? "stop" : "navigate"}
        action={() => setShowTasks(!showTasks)}
        size={200}
      />

      <Collapse in={showTasks}>
        <div style={{ marginTop: "10px" }}>
          <Typography variant="body1">Task: {drone?.currentAction}</Typography>
          <Typography variant="body2">
            From: {drone?.task.from.join(",")}
          </Typography>
          <Typography variant="body2">
            To: {drone?.task.to.join(",")}
          </Typography>
          <Typography variant="body2">Status: {drone?.task.state}</Typography>
        </div>
      </Collapse>
    </div>
  );
}
