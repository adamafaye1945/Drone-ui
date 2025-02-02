import { Pagination } from "@mui/material";
import { DeployedDroneInformation } from "../../types/droneTypes";
import { ChangeEvent } from "react";
interface PaginationComponentProps {
  pageChanged: (_: ChangeEvent<unknown>, page: number) => void;
  currentPageNumber: number;
  drones: DeployedDroneInformation[];
}
export function PaginationComponent({
  pageChanged,
  currentPageNumber,
  drones,
}: PaginationComponentProps) {
  return (
    <Pagination
      onChange={pageChanged}
      page={currentPageNumber}
      count={drones ? Math.ceil(drones.length / 9) : 0}
      size="large"
      variant="outlined"
      sx={{
        position: "fixed",
        bottom: "0",
        marginBottom: "10px",
        "& .MuiPaginationItem-root": {
          color: "#86A788",
          borderColor: "#86A788",
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "#86A788",
          color: "white",
        },
      }}
    />
  );
}
