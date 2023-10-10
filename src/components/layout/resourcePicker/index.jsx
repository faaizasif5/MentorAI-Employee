import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import isdarkmode from "../../../helpers/darkmodeHelper";

function ResourcePicker({
  designationName,
  handleDropdownChange,
  dummyData,
  DarkModeFontColour,
  t,
  theme,
  MenuProps,
  dropdownStyles,
}) {
  return (
    <FormControl sx={{ gridColumn: "span 2" }}>
      <InputLabel id="demo-multiple-name-label" sx={DarkModeFontColour()}>
        {t("project.pickResources")}
      </InputLabel>
      <Select
        labelId="designation-label"
        id="designation-label-name"
        multiple
        value={designationName}
        onChange={handleDropdownChange}
        variant="filled"
        input={<OutlinedInput label="Employees" />}
        MenuProps={MenuProps}
        sx={{ width: 500, color: isdarkmode() ? "white" : "black" }}
      >
        {dummyData.map((employee) => (
          <MenuItem
            key={employee.employee_id}
            value={employee.employee_id}
            sx={dropdownStyles(employee.employee_id, designationName, theme)}
          >
            {`${employee.first_name} ${employee.last_name} (${employee.designation})`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ResourcePicker;
