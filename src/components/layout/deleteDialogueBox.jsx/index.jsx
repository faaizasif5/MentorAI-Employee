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
import { useDarkMode } from "../../../context/DarkModeContext";
import {
  DeleteModalCancelButtonStyle,
  DeleteModalConfirmButtonStyle,
  DeleteModalContentStyle,
} from "../muiStyles";

function deleteDialog({
  fullScreen,
  isOpen,
  handleClickClose,
  handleDeleteConfirm,
  title,
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  const colors = tokens(theme.palette.mode);
  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={handleClickClose}
      aria-labelledby="responsive-dialog-title"
      sx={{
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          backgroundColor: isDarkMode ? "rgb(48 47 53)" : "white",
        },
      }}
    >
      <DialogTitle
        id="responsive-dialog-title"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Lato",
          color: isDarkMode ? "white" : "black",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          // style={{
          //   fontFamily: "unset",
          //   color: isDarkMode ? "white" : "#e94343",
          // }}
          sx={DeleteModalContentStyle(isDarkMode)}
        >
          <h5>{t("delete.DialogContentText")}</h5>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          autoFocus
          onClick={handleClickClose}
          sx={DeleteModalCancelButtonStyle(isDarkMode, colors, theme)}
        >
          {t("delete.cancel")}
        </Button>
        <Button
          onClick={handleDeleteConfirm}
          autoFocus
          sx={DeleteModalConfirmButtonStyle(isDarkMode, theme)}
        >
          {t("delete.delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default deleteDialog;
