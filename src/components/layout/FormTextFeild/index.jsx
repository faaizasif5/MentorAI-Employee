import React from "react";
import TextField from "@mui/material/TextField";
import { FormTextBoxStyle } from "../../../styles/muiStyles";

function FormFields({
  handleBlur,
  handleChange,
  values,
  touched,
  errors,
  isDarkMode,
  formFields,
}) {
  return (
    <>
      {formFields.map((field) => (
        <TextField
          key={field.name}
          fullWidth
          type={field.name === "password" ? "password" : "text"}
          label={field.label}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values[field.name]}
          name={field.name}
          error={!!touched[field.name] && !!errors[field.name]}
          helperText={touched[field.name] && errors[field.name]}
          sx={{ gridColumn: "span 2", ...FormTextBoxStyle(isDarkMode) }}
        />
      ))}
    </>
  );
}

export default FormFields;
