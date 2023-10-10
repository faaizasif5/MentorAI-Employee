import { Box, useTheme, Divider } from "@mui/material";
import HappyGreen from "../../assets/Emojis/happyGreen.png";
import HappyYellow from "../../assets/Emojis/happyYellow.png";
import HappyBlue from "../../assets/Emojis/happyBlue.png";
import HappyRed from "../../assets/Emojis/happyRed.png";
import { tokens } from "../../theme";
import {
  EmployeeBoxStyle,
  PieChartTypographyStyle,
} from "../../styles/muiStyles";
import EmployeeLoadBox from "../layout/employeeLoadBox/employeeLoadBox";
import isdarkmode from "../../helpers/darkmodeHelper";

function EmployeeLoad() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box backgroundColor={colors.primary[400]} sx={EmployeeBoxStyle}>
      <EmployeeLoadBox
        emoji={HappyGreen}
        value={73}
        color={isdarkmode() ? "#32852d" : "#54D14D"}
        text="Normal"
        background={isdarkmode() ? "#253c24f2" : "rgba(84, 209, 77, 0.10)"}
        border="1px solid #54D14D"
      />
      <Divider sx={PieChartTypographyStyle()} />
      <EmployeeLoadBox
        emoji={HappyBlue}
        value={34}
        color={isdarkmode() ? "#1e7295" : "#35C2FD"}
        text="Normal"
        background={isdarkmode() ? "#24243cf2" : "rgba(75, 126, 239, 0.10)"}
        border="1px solid #4B7EEF"
      />
      <Divider sx={PieChartTypographyStyle()} />
      <EmployeeLoadBox
        emoji={HappyYellow}
        value={51}
        color="#EF7E5D"
        text="Medium"
        background={isdarkmode() ? "#38362b" : "rgba(245, 195, 0, 0.10)"}
        border="1px solid #F5C300"
      />
      <Divider sx={PieChartTypographyStyle()} />
      <EmployeeLoadBox
        emoji={HappyRed}
        value={51}
        color="#dd0000"
        text="High"
        background={isdarkmode() ? "#403030f2" : "rgb(255 141 141 / 20%)"}
        border="1px solid #FC4545"
      />
      <Divider sx={PieChartTypographyStyle()} />
    </Box>
  );
}

export default EmployeeLoad;
