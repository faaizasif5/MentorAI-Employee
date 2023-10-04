import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PieChartGraph from "./PieChartGraph";
import { PieChartdata } from "../../constants/dummydata";
import {
  PieChartBoxStyle,
  PieChartTypographyStyle,
} from "../../styles/muiStyles";
import { useDarkMode } from "../../context/DarkModeContext";

function PieChartBox() {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  return (
    <Box sx={PieChartBoxStyle(isDarkMode)}>
      <Typography variant="h6" sx={PieChartTypographyStyle(isDarkMode)}>
        {t("dashboard.piechart")}
      </Typography>
      <PieChartGraph chartData={PieChartdata} />
    </Box>
  );
}

export default PieChartBox;
