import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const CustomDataGridStyles = (isDarkMode) => {
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
      backgroundColor: isDarkMode ? "#595a68" : colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      color: isDarkMode ? "#e3e3e3" : "black",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: isDarkMode ? "#cbc3c3" : colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: isDarkMode ? "#595a68" : colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    "& .css-hpjhlg-MuiTablePagination-root .MuiTablePagination-selectLabel": {
      color: "black",
      marginTop: "8px",
    },
    "& .css-7ms3qr-MuiTablePagination-displayedRows": {
      color: "black",
      marginTop: "11px",
    },
  };

  return dataGridStyles;
};

export default CustomDataGridStyles;
