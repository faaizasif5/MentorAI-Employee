import { Avatar, ListItemAvatar } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import themes from "../../../theme";

function ProfileDateField({ label, value, onChange, isDarkMode }) {
  return (
    <Stack direction="row" alignItems="center">
      <ListItemAvatar>
        <Avatar>
          <CalendarMonthIcon />
        </Avatar>
      </ListItemAvatar>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateField", "DateField"]}>
          <DateField
            label={label}
            value={value}
            onChange={onChange}
            format="LL"
            sx={{ width: 300, maxWidth: "100%" }}
            InputLabelProps={{
              style: {
                color: isDarkMode
                  ? themes.darkmodefontColor
                  : themes.lightmodeFontColor,
              },
            }}
            inputProps={{
              style: {
                color: isDarkMode
                  ? themes.darkmodefontColor
                  : themes.lightmodeFontColor,
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Stack>
  );
}

export default ProfileDateField;
