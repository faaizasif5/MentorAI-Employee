import React from "react";
import { PieChart } from "@mui/x-charts";
import { PieChartStyle } from "../layout/muiStyles";
import { useDarkMode } from "../../context/DarkModeContext";

function PieChartGraph({ chartData }) {
  const { isDarkMode } = useDarkMode();
  return (
    <PieChart
      series={[
        {
          data: chartData,
          cx: 180,
          cy: 140,
          innerRadius: 120,
          outerRadius: 80,
        },
      ]}
      height={400}
      legend={{
        direction: "column",
        position: {
          vertical: "middle",
          horizontal: "middle",
        },
      }}
      sx={PieChartStyle(isDarkMode)}
    />
  );
}

export default PieChartGraph;
