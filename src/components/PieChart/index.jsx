import React from "react";
import { Box, Typography } from "@mui/material";
import PieChartGraph from "./PieChartGraph";
import { PieChartdata } from "../../constants/dummydata";
import { PieChartBoxStyle, PieChartTypographyStyle } from "../layout/muiStyles";
import { useDarkMode } from "../../context/DarkModeContext";

function PieChartBox() {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      gridColumn="span 1"
      gridRow="span 1"
      width="90vh"
      height="374px"
      sx={PieChartBoxStyle(isDarkMode)}
    >
      <Typography variant="h6" sx={PieChartTypographyStyle(isDarkMode)}>
        PieChart
      </Typography>
      <PieChartGraph chartData={PieChartdata} />
    </Box>
  );
}

export default PieChartBox;
