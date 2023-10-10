import {
  Button,
  OutlinedInput,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";
import { DarkModeFontColour } from "../../../styles/muiStyles";
import isdarkmode from "../../../helpers/darkmodeHelper";

function AddDialog({
  addOpen,
  handleAddClose,
  selectedEmployeeId,
  handleChange,
  employeesWithoutLineManagers,
  handleAssignClick,
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const colors = tokens(theme.palette.mode);
  return (
    <Dialog
      open={addOpen}
      onClose={handleAddClose}
      sx={{
        '[class*="MuiPaper-root"][class*="MuiDialog-paper"]': {
          backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "white",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Gilroy-Bold",
          ...DarkModeFontColour(),
        }}
      >
        {t("employee.assignEmployee")}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}>
          <FormControl sx={{ width: 550 }}>
            <InputLabel id="demo-multiple-name-label" sx={DarkModeFontColour()}>
              {t("employee.pickEmployee")}
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={selectedEmployeeId}
              onChange={handleChange}
              input={<OutlinedInput label={t("linemanager.assign")} />}
              sx={DarkModeFontColour()}
            >
              {employeesWithoutLineManagers.map((employee) => (
                <MenuItem
                  key={employee.employee_id}
                  value={employee.employee_id}
                  sx={{
                    backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "white",
                    "&:hover": {
                      backgroundColor: "green",
                    },
                    ...DarkModeFontColour(),
                  }}
                >
                  {employee.first_name} {employee.last_name} (
                  {employee.designation})
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            sx={{
              height: 50,
              fontSize: "12px",
              backgroundColor: "green",
              color: theme.palette.common.white,
              marginTop: 10,
              width: 300,
              "&:hover": {
                backgroundColor: "green",
                color: theme.palette.common.white,
              },
            }}
            onClick={handleAssignClick}
          >
            {t("employee.assign")}
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleAddClose}
          sx={{
            backgroundColor: isdarkmode()
              ? "rgb(85 88 131)"
              : colors.blueAccent[700],
            color: theme.palette.common.white,
            width: "50%",
            mx: "auto",
            "&:hover": {
              backgroundColor: isdarkmode()
                ? "rgb(85 88 131)"
                : colors.blueAccent[700],
              color: theme.palette.common.white,
            },
          }}
        >
          {t("employee.cancel")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddDialog;
