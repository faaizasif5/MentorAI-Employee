import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DashboardTitle from "./dashboardTitle";
import RedAlertEmployees from "../redAlertEmployees";
import AvgEmployeeMoodBox from "../averageMoodBox";
import PieChartBox from "../PieChart/index";
import EmployeeLoad from "../employeeLoad";
import DarkmoodButton from "../layout/darkmodeButton";
import "./styles.css";

function Dashboard() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      m="15px"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <DarkmoodButton />
      <DashboardTitle />
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridAutoRows="auto"
        gap="15px"
        justifyContent="center"
        alignItems="center"
      >
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
