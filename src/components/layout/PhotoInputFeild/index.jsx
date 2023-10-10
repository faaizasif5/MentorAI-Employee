import React from "react";
import TextField from "@mui/material/TextField";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { FormTextBoxStyle } from "../../../styles/muiStyles";

function PhotoInput() {
  return (
    <TextField
      type="file"
      sx={{ gridColumn: "span 2", ...FormTextBoxStyle }}
      accept="image/*"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <div>
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
