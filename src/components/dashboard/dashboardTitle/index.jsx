import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  DashboardTitleBoxStyle,
  DashboardTitleTextStyle,
  LoadStressTitleBox,
  LoadTitle,
  StressTitle,
} from "../../layout/muiStyles";
import { useDarkMode } from "../../../context/DarkModeContext";

function DashboardTitle() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Box sx={DashboardTitleBoxStyle}>
        <Typography sx={DashboardTitleTextStyle(isDarkMode)}>
          Dashboard
        </Typography>
      </Box>
      <Box sx={LoadStressTitleBox}>
        <Typography variant="h6" sx={LoadTitle(isDarkMode)}>
          Employee Load
        </Typography>
        <Typography variant="h6" sx={StressTitle(isDarkMode)}>
          Overall Employee Stress
        </Typography>
      </Box>
    </>
  );
}

export default DashboardTitle;
