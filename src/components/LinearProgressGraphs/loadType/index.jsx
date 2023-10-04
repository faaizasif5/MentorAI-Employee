import React from "react";
import { Typography } from "@mui/material";
import { LoadTypeTextStyle } from "../../../styles/muiStyles";
import { useDarkMode } from "../../../context/DarkModeContext";

function LoadType(props) {
  const { text } = props;
  const { isDarkMode } = useDarkMode();
  return <Typography sx={LoadTypeTextStyle(isDarkMode)}>{text}</Typography>;
}
export default LoadType;
