import React from "react";
import { Divider } from "@mui/material";
import { ProfileDividerStyle } from "../../../styles/muiStyles";

function ProfileDivider() {
  return <Divider orientation="vertical" flexItem sx={ProfileDividerStyle()} />;
}

export default ProfileDivider;
