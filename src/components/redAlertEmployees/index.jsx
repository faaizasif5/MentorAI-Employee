import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { redAlertEmployees } from "../../constants/dummydata";
import {
  RedAlertBoxStyle,
  RedAlertTitleStyle,
  RedAlertContentBoxStyle,
  RedAlertRowContent,
  RedAlertEmpName,
  RedAlertDate,
  RowDivider,
  RedAlertFrequency,
} from "../../styles/muiStyles";
import isdarkmode from "../../helpers/darkmodeHelper";

function RedAlertEmployees() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={RedAlertBoxStyle}>
        <Typography sx={RedAlertTitleStyle}>
          {t("dashboard.redAlertEmployees")}
        </Typography>
      </Box>
      <Box
        sx={{
          ...RedAlertContentBoxStyle,
          overflowY: "auto",
          backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "white",
          borderRadius: "16px",
          paddingBottom: "20px",
          marginTop: "10px",
        }}
      >
        {redAlertEmployees.map((employee) => (
          <div key={employee.id}>
            <Box sx={RedAlertRowContent}>
              <Avatar alt={employee.name} src={employee.avatar} />
              <Typography sx={RedAlertEmpName}>{employee.name}</Typography>
              <Typography sx={{ ...RedAlertFrequency, marginLeft: "110px" }}>
                {employee.frequency}
              </Typography>
              <Typography sx={RedAlertDate}>{employee.date}</Typography>
            </Box>
            <Divider sx={RowDivider} />
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default RedAlertEmployees;
