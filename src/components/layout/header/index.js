import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { useDarkMode } from "../../../context/DarkModeContext";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isDarkMode } = useDarkMode();
  return (
    <Box mb="10px">
      <Typography
        variant="h2"
        color={isDarkMode ? "white" : colors.grey[100]}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Box>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
