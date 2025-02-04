import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { GroundedDroneInformation } from "../../types/droneTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { backgroundColor } from "../../form/theme";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100, type: "string" },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Profile"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />
    ),
  },
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
interface DataTableProps {
  setRowSelected: (params: any) => void;
}
export default function DataTable({ setRowSelected }: DataTableProps) {
  const GroundedDroneState: GroundedDroneInformation[] = useSelector(
    (state: RootState) => state.drone.grounded
  );

  function flattenData(rows: GroundedDroneInformation[]) {
    return rows.map((element) => {
      return { ...element.information, availability: element.availability };
    });
  }
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={flattenData(GroundedDroneState)}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(selection) => setRowSelected(selection)}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
