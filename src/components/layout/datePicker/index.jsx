import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { FormTextBoxStyle } from "../../../styles/muiStyles";

function DatePicker({
  selectedDate,
  label,
  onChange,
  inputFormat,
  handleBlur,
  minDate,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        value={selectedDate}
        label={label}
        onChange={onChange}
        inputFormat={inputFormat}
        onBlur={handleBlur}
        minDate={minDate}
        sx={{ gridColumn: "span 1", ...FormTextBoxStyle() }}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
