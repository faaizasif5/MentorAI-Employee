import { Box, useTheme, Divider } from "@mui/material";
import { tokens } from "../../theme";
import { EmployeeBoxStyle, RowDivider } from "../../styles/muiStyles";
import EmployeeLoadBox from "../common/employeeLoadBox/employeeLoadBox";
import { employeeData } from "../../constants/dummydata";

function EmployeeLoad() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box backgroundColor={colors.primary[400]} sx={EmployeeBoxStyle}>
      {employeeData.map((employee) => (
        <div key={employee.emoji}>
          <EmployeeLoadBox
            emoji={employee.emoji}
            value={employee.value}
            color={employee.color}
            text={employee.text}
            background={employee.background}
            border={employee.border}
          />
          <Divider sx={RowDivider} />
        </div>
      ))}
    </Box>
  );
}

export default EmployeeLoad;
