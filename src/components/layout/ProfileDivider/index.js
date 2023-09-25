import React from "react";
import { Divider } from "@mui/material";

function ProfileDivider({ isDarkMode }) {
  return (
    <Divider
      orientation="vertical"
      flexItem
      sx={{ backgroundColor: isDarkMode ? "white" : "#000000" }}
    />
  );
}

export default ProfileDivider;
