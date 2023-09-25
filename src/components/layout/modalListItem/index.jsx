import { ListItem, Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../context/DarkModeContext";
import { ListItemStyle } from "../muiStyles";

function ModalListItem({ label, value, AvatarIcon }) {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  return (
    <ListItem sx={ListItemStyle(isDarkMode)}>
      <ListItemAvatar>
        <Avatar>
          <AvatarIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{ marginTop: "10px" }}
        primary={t(label)}
        secondary={value}
      />
    </ListItem>
  );
}

export default ModalListItem;
