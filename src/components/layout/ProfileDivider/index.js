import React from "react";
import { Divider } from "@mui/material";
import { ProfileDividerStyle } from "../../../styles/muiStyles";

function ProfileDivider({ isDarkMode }) {
  return (
    <Divider
      orientation="vertical"
      flexItem
      sx={ProfileDividerStyle(isDarkMode)}
    />
  );
}

export default ProfileDivider;
