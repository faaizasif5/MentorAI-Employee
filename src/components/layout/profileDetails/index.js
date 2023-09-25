import React from "react";
import { Stack, ListItemAvatar, Avatar, TextField } from "@mui/material";

function ProfileInfo({ label, value, AvatarIcon, isDarkMode }) {
  const textColor = isDarkMode ? "rgb(237 237 237)" : "black";

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
            borderBottom: isDarkMode ? "1px solid #d1d1d1" : "black", // Set the border color conditionally
          },
        }}
        InputLabelProps={{ style: { color: isDarkMode ? "#d1d1d1" : "black" } }} // Set the label color explicitly
        variant="standard"
      />
    </Stack>
  );
}

export default ProfileInfo;
