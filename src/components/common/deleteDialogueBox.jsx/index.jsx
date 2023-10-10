import {
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";
import isdarkmode from "../../../helpers/darkmodeHelper";
import {
  DeleteModalCancelButtonStyle,
  DeleteModalConfirmButtonStyle,
  DeleteModalContentStyle,
  DarkModeFontColour,
} from "../../../styles/muiStyles";

function deleteDialog({
  fullScreen,
  isOpen,
  handleClickClose,
  handleDeleteConfirm,
  title,
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const colors = tokens(theme.palette.mode);
  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={handleClickClose}
      aria-labelledby="responsive-dialog-title"
      className="custom-dialog"
      PaperProps={{
        sx: {
          backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "white",
        },
      }}
    >
      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Lato",
          ...DarkModeFontColour(),
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={DeleteModalContentStyle()}>
          <h5>{t("delete.DialogContentText")}</h5>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          autoFocus
          onClick={handleClickClose}
          sx={DeleteModalCancelButtonStyle(colors, theme)}
        >
          {t("delete.cancel")}
        </Button>
        <Button
          onClick={handleDeleteConfirm}
          autoFocus
          sx={DeleteModalConfirmButtonStyle(theme)}
        >
          {t("delete.delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default deleteDialog;
