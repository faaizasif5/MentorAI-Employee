import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";

function IsLineManagerSelect({
  isLineManager,
  handleLineManagerChange,
  DarkModeFontColour,
  t,
  MenuProps,
  isDarkMode,
}) {
  return (
    <FormControl sx={{ gridColumn: "span 2" }}>
      <InputLabel
        id="line-manager-label"
        style={DarkModeFontColour(isDarkMode)}
      >
        {t("linemanager.isLineManager")}
      </InputLabel>
      <Select
        labelId="line-manager-label"
        id="line-manager-select"
        value={isLineManager ? "yes" : "no"}
        onChange={handleLineManagerChange}
        input={<OutlinedInput label={t("linemanager.isLineManager")} />}
        MenuProps={MenuProps}
        style={DarkModeFontColour(isDarkMode)}
      >
        <MenuItem
          value="yes"
          style={{
            backgroundColor: isDarkMode ? "rgb(48 47 53)" : "white",
            ...DarkModeFontColour(isDarkMode),
          }}
        >
          Yes
        </MenuItem>
        <MenuItem
          value="no"
          style={{
            backgroundColor: isDarkMode ? "rgb(48 47 53)" : "white",
            ...DarkModeFontColour(isDarkMode),
          }}
        >
          No
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default IsLineManagerSelect;
