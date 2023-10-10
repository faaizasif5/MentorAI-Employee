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
  MenuProps,
  dropdownStyles,
}) {
  return (
    <FormControl sx={{ gridColumn: "span 2" }}>
      <InputLabel id="demo-multiple-name-label" sx={DarkModeFontColour()}>
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
        sx={DarkModeFontColour()}
      >
        {designations.map((designation) => (
          <MenuItem
            key={designation}
            value={designation}
            sx={dropdownStyles(designation, designationName, theme)}
          >
            {designation}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DesignationDropdown;
