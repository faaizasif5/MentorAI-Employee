import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";

function DesignationDropdown({
  designationName,
  handleDropdownChange,
  designations,
  DarkModeFontColour,
  t,
  theme,
  isDarkMode,
  MenuProps,
  dropdownStyles,
}) {
  return (
    <FormControl sx={{ gridColumn: "span 2" }}>
      <InputLabel
        id="demo-multiple-name-label"
        style={DarkModeFontColour(isDarkMode)}
      >
        {t("auth.designation")}
      </InputLabel>
      <Select
        labelId="designation-label"
        id="designation-label-name"
        multiple={false}
        value={designationName}
        onChange={handleDropdownChange}
        input={<OutlinedInput label={t("auth.designation")} />}
        MenuProps={MenuProps}
        sx={DarkModeFontColour(isDarkMode)}
      >
        {designations.map((designation) => (
          <MenuItem
            key={designation}
            value={designation}
            style={dropdownStyles(
              designation,
              designationName,
              theme,
              isDarkMode,
            )}
          >
            {designation}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DesignationDropdown;
