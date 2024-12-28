import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemButton,
  Pagination,
} from "@mui/material";
import { Allinfo } from "../../types/droneTypes";
import DroneFleetManagement from "../droneFleet/droneFleet";
import { useState } from "react";
export function Management({ infos }: Allinfo) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  console.log(currentPageNumber);
  // calculating number of element appearing in a page

  function pageChanged(event: React.ChangeEvent<unknown>, page: number) {
    setCurrentPageNumber(page);
  }
  function paginate<T>(array: T[], page: number, itemsPerPage: number): T[] {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  }
  const paginatedInfos = paginate(infos, currentPageNumber, 9);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
        overflowY: "auto",
        padding: "16px",
      }}
    >
      <DroneFleetManagement />

      <List sx={{ width: "100%" }}>
        {paginatedInfos.map((info, index) => (
          <ListItemButton>
            <ListItem key={index} sx={{ borderBottom: "1px solid #333" }}>
              <ListItemAvatar>
                <Avatar src="src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTA0Ni1wLnBuZw.webp"></Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "white" }}
                primary={info.model}
                secondary={info.currentAction}
              />
            </ListItem>
          </ListItemButton>
        ))}
        <Pagination
          onChange={pageChanged}
          page={currentPageNumber}
          count={Math.ceil(infos.length / 9)}
          size="large"
          variant="outlined"
          sx={{
            position: "fixed",
            bottom: "0",
            marginBottom: "10px",
            "& .MuiPaginationItem-root": {
              color: "#86A788", // Default text color
              borderColor: "#86A788", // Border color for outlined variant
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#86A788",
              color: "white",
            },
          }}
        />
      </List>
    </Box>
  );
}
