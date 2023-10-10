import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import isdarkmode from "../../../helpers/darkmodeHelper";

const CustomDataGridStyles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dataGridStyles = {
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: isdarkmode() ? "#595a68" : colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      color: isdarkmode() ? "#e3e3e3" : "black",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: isdarkmode() ? "#cbc3c3" : colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: isdarkmode() ? "#595a68" : colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    '[class*="MuiTablePagination-root"] [class*="MuiTablePagination-selectLabel"]':
      {
        color: "black",
        marginTop: "8px",
      },
    '[class*="MuiTablePagination-root"] [class*="MuiTablePagination-displayedRows"]':
      {
        color: "black",
        marginTop: "11px",
      },
  };

  return dataGridStyles;
};

export default CustomDataGridStyles;
