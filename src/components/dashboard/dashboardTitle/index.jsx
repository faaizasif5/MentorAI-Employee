import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import {
  DashboardTitleBoxStyle,
  DashboardTitleTextStyle,
  LoadStressTitleBox,
  LoadTitle,
  StressTitle,
} from "../../../styles/muiStyles";
import { useDarkMode } from "../../../context/DarkModeContext";

function DashboardTitle() {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Box sx={DashboardTitleBoxStyle}>
        <Typography sx={DashboardTitleTextStyle(isDarkMode)}>
          {t("dashboard.dashboard")}
        </Typography>
      </Box>
      <Box sx={LoadStressTitleBox}>
        <Typography variant="h6" sx={LoadTitle(isDarkMode)}>
          {t("dashboard.EmployeeLoad")}
        </Typography>
        <Typography variant="h6" sx={StressTitle(isDarkMode)}>
          {t("dashboard.stress")}
        </Typography>
      </Box>
    </>
  );
}

export default DashboardTitle;
