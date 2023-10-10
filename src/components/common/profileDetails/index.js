import React from "react";
import { Stack, ListItemAvatar, Avatar, TextField } from "@mui/material";
import isdarkmode from "../../../helpers/darkmodeHelper";

function ProfileInfo({ label, value, AvatarIcon }) {
  const textColor = isdarkmode() ? "rgb(237 237 237)" : "black";

  return (
    <Stack direction="row" alignItems="center">
      <ListItemAvatar>
        <Avatar>
          <AvatarIcon />
        </Avatar>
      </ListItemAvatar>
      <TextField
        sx={{ width: 300, maxWidth: "100%", color: textColor }}
        id="standard-read-only-input"
        label={label}
        defaultValue={value}
        InputProps={{
          readOnly: true,
          style: {
            color: textColor,
            borderBottom: isdarkmode() ? "1px solid #d1d1d1" : "black",
          },
        }}
        InputLabelProps={{
          style: { color: isdarkmode() ? "#d1d1d1" : "black" },
        }}
        variant="standard"
      />
    </Stack>
  );
}

export default ProfileInfo;
