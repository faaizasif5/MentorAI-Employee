import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        {/*
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      */}
      </Box>
    </Box>
  );
}

export default Topbar;
