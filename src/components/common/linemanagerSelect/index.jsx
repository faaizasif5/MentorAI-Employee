import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import isdarkmode from "../../../helpers/darkmodeHelper";

function IsLineManagerSelect({
  isLineManager,
  handleLineManagerChange,
  DarkModeFontColour,
  t,
  MenuProps,
}) {
  return (
    <FormControl sx={{ gridColumn: "span 2" }}>
      <InputLabel id="line-manager-label" sx={DarkModeFontColour()}>
        {t("linemanager.isLineManager")}
      </InputLabel>
      <Select
        labelId="line-manager-label"
        id="line-manager-select"
        value={isLineManager ? "yes" : "no"}
        onChange={handleLineManagerChange}
        input={<OutlinedInput label={t("linemanager.isLineManager")} />}
        MenuProps={MenuProps}
        sx={DarkModeFontColour()}
      >
        <MenuItem
          value="yes"
          sx={{
            backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "white",
            "&:hover": {
              backgroundColor: "green",
            },
            ...DarkModeFontColour(),
          }}
        >
          Yes
        </MenuItem>
        <MenuItem
          value="no"
          sx={{
            backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "white",
            ...DarkModeFontColour(),
          }}
        >
          No
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default IsLineManagerSelect;
