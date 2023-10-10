import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PieChartGraph from "./PieChartGraph";
import { PieChartdata } from "../../constants/dummydata";
import {
  PieChartBoxStyle,
  PieChartTypographyStyle,
} from "../../styles/muiStyles";

function PieChartBox() {
  const { t } = useTranslation();
  return (
    <Box sx={PieChartBoxStyle}>
      <Typography variant="h6" sx={PieChartTypographyStyle}>
        {t("dashboard.piechart")}
      </Typography>
      <PieChartGraph chartData={PieChartdata} />
    </Box>
  );
}

export default PieChartBox;
