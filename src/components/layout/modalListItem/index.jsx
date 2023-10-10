import { ListItem, Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ListItemStyle } from "../../../styles/muiStyles";

function ModalListItem({ label, value, AvatarIcon }) {
  const { t } = useTranslation();
  return (
    <ListItem sx={ListItemStyle}>
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
