import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "model", headerName: "Model", width: 100, type: "string" },
  { field: "size", headerName: "Size", width: 130, type: "string" },
  { field: "charge", headerName: "Charge", width: 130, type: "number" },
  {
    field: "availability",
    headerName: "Availability",
    type: "string",
    width: 130,
    sortable: true,
  },
  {
    field: "fullName",
    headerName: "Current Task",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 700,
  },
];

const rows = [
  {
    id: 1, // Each row needs a unique `id` field
    model: "Drone-X123",
    size: "Medium",
    charge: "80",
    availability: "Available",
    fullName: "Delivering package to 123 Elm St.",
  },
  {
    id: 2,
    model: "Drone-Y456",
    size: "Large",
    charge: "45",
    availability: "In Maintenance",
    fullName: "Patrolling Area B-12",
  },
  {
    id: 3,
    model: "Drone-Z789",
    size: "Small",
    charge: "100",
    availability: "Available",
    fullName: "Idle",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
