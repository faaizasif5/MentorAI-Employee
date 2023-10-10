import React from "react";
import { Box, CircularProgress } from "@mui/material";

function LazyLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LazyLoader;
