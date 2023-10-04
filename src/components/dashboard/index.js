import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DashboardTitle from "./dashboardTitle";
import RedAlertEmployees from "../redAlertEmployees";
import AvgEmployeeMoodBox from "../averageMoodBox";
import PieChartBox from "../PieChart/index";
import EmployeeLoad from "../employeeLoad";
import DarkmoodButton from "../layout/darkmodeButton";
import {
  DashboardOuterBoxStyle,
  DashboardInnerBoxStyle,
} from "../../styles/muiStyles";
import "./styles.css";

function Dashboard() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={DashboardOuterBoxStyle(isNonMobile)}>
      <DarkmoodButton />
      <DashboardTitle />
      <Box sx={DashboardInnerBoxStyle}>
        {/* First Row */}
        <EmployeeLoad />
        <PieChartBox />
        {/* Second Row */}
        <RedAlertEmployees />
        <AvgEmployeeMoodBox />
      </Box>
    </Box>
  );
}

export default Dashboard;
