import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function SuccessAlert({ submit, alertTitle, alertContent }) {
  return (
    <Box display="flex" justifyContent="center" mt="30px">
      {submit && (
        <Alert severity="success">
          <AlertTitle>{alertTitle}</AlertTitle>
          <strong>{alertContent}</strong>
        </Alert>
      )}
    </Box>
  );
}

export default SuccessAlert;
