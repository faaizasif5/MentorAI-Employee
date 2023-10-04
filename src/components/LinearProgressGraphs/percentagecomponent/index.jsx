import { Typography } from "@mui/material";
import { PercentageTextStyle } from "../../../styles/muiStyles";
import { useDarkMode } from "../../../context/DarkModeContext";

function Percentage(props) {
  const { perc } = props;
  const { isDarkMode } = useDarkMode();
  return <Typography sx={PercentageTextStyle(isDarkMode)}>{perc}</Typography>;
}
export default Percentage;
