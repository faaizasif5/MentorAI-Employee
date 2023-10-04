import React from "react";
import TextField from "@mui/material/TextField";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { FormTextBoxStyle } from "../../../styles/muiStyles";

function PhotoInput({ isDarkMode }) {
  return (
    <TextField
      type="file"
      sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
      accept="image/*"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <div>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="icon-button-file">
              <PhotoCameraIcon />
            </label>
          </div>
        ),
      }}
    />
  );
}

export default PhotoInput;
