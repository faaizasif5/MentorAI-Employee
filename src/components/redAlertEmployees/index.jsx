import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { redAlertEmployees } from "../../constants/dummydata";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  RedAlertBoxStyle,
  RedAlertTitleStyle,
  RedAlertContentBoxStyle,
  RedAlertRowContent,
  RedAlertEmpName,
  RedAlertDate,
  RedAlertDivider,
  RedAlertFrequency,
} from "../../styles/muiStyles";

function RedAlertEmployees() {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  return (
    <Box>
      <Box sx={RedAlertBoxStyle(isDarkMode)}>
        <Typography sx={RedAlertTitleStyle(isDarkMode)}>
          {t("dashboard.redAlertEmployees")}
        </Typography>
      </Box>
      <Box
        sx={{
          ...RedAlertContentBoxStyle(isDarkMode),
          overflowY: "auto",
        }}
      >
        {redAlertEmployees.map((employee) => (
          <div key={employee.id}>
            <Box sx={RedAlertRowContent}>
              <Avatar alt={employee.name} src={employee.avatar} />
              <Typography sx={RedAlertEmpName(isDarkMode)}>
                {employee.name}
              </Typography>
              <Typography sx={{ ...RedAlertFrequency, marginLeft: "110px" }}>
                {employee.frequency}
              </Typography>
              <Typography sx={RedAlertDate}>{employee.date}</Typography>
            </Box>
            <Divider sx={RedAlertDivider} />
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default RedAlertEmployees;
