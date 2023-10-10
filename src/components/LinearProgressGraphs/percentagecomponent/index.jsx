import { Typography } from "@mui/material";
import { PercentageTextStyle } from "../../../styles/muiStyles";

function Percentage(props) {
  const { perc } = props;
  return <Typography sx={PercentageTextStyle}>{perc}</Typography>;
}
export default Percentage;
