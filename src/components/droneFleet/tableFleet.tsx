import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { GroundedDroneInformation } from "../../types/droneTypes";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100, type: "string" },
  {
    field: "model",
    headerName: "Model",
    width: 100,
    type: "string",
  },
  {
    field: "size",
    headerName: "Size",
    width: 130,
    type: "string",
    sortable: true,
  },
  {
    field: "charge",
    headerName: "Charge",
    width: 130,
    type: "number",
    sortable: true,
  },
  {
    field: "carrying",
    headerName: "Lift Capacity in lbs",
    width: 130,
    type: "number",
    sortable: true,
  },
  {
    field: "availability",
    headerName: "Availability",
    type: "string",
    width: 130,
    sortable: true,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const rows: GroundedDroneInformation[] = [
    {
      information: {
        id: "1212",
        model: "seria12",
        charge: 10,
        image: "somepdf.pdf",
        size: "medium",
        carrying: 10,
      },
      availability: "Available", // Correct spelling
    },
  ];
  function flattenData(rows: GroundedDroneInformation[]) {
    return rows.map((element) => {
      return { ...element.information, availability: element.availability };
    });
  }
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={flattenData(rows)}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
