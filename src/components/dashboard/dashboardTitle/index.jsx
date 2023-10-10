import React from "react";
import Box from "@mui/material/Box";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { auth } from "../../../services/firebase";
import {
  DashboardTitleBoxStyle,
  DashboardTitleTextStyle,
  LoadStressTitleBox,
  LoadTitle,
  StressTitle,
} from "../../../styles/muiStyles";

function DashboardTitle() {
  const { t } = useTranslation();
  const [user] = useAuthState(auth);
  return (
    <>
      <Box sx={DashboardTitleBoxStyle}>
        <Typography sx={DashboardTitleTextStyle()}>
          {user.displayName
            ? `${t("dashboard.hey")} ${user.displayName
                .split(" ")
                .slice(0, 2)
                .join(" ")}!`
            : t("dashboard.dashboard")}
        </Typography>
      </Box>
      <Box sx={LoadStressTitleBox}>
        <Typography variant="h6" sx={LoadTitle()}>
          {t("dashboard.EmployeeLoad")}
        </Typography>
        <Typography variant="h6" sx={StressTitle()}>
          {t("dashboard.stress")}
        </Typography>
      </Box>
    </>
  );
}

export default DashboardTitle;
