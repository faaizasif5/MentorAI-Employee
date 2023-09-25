import { Box, Modal, Fade, Grid, List, Divider, Backdrop } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import NumbersIcon from "@mui/icons-material/Numbers";
import { previewModalStyle } from "../muiStyles";
import { useDarkMode } from "../../../context/DarkModeContext";
import ModalListItem from "../modalListItem";

function EmployeeModal({ open, handleClose, rowsData }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={previewModalStyle(isDarkMode)}>
          <Grid container>
            <Grid item xs={11}>
              <List sx={{ width: "100%" }}>
                <ModalListItem
                  label="employee.id"
                  value={
                    rowsData.line_manager_id
                      ? rowsData.line_manager_id
                      : rowsData.employee_id
                  }
                  AvatarIcon={NumbersIcon}
                />
                <ModalListItem
                  label="employee.name"
                  value={`${rowsData.first_name} ${rowsData.last_name}`}
                  AvatarIcon={PersonIcon}
                />
                <ModalListItem
                  label="employee.email"
                  value={rowsData.email}
                  AvatarIcon={MailIcon}
                />
                <ModalListItem
                  label="employee.Designation"
                  value={rowsData.designation}
                  AvatarIcon={WorkIcon}
                />
                <ModalListItem
                  label="employee.Contact"
                  value={rowsData.contact_no}
                  AvatarIcon={DialpadIcon}
                />
                <ModalListItem
                  label="employee.cnic"
                  value={rowsData.cnic}
                  AvatarIcon={DescriptionIcon}
                />
                <ModalListItem
                  label="employee.address"
                  value={rowsData.address}
                  AvatarIcon={HomeIcon}
                />
              </List>
            </Grid>
            <Divider sx={{ margin: "16px 0", backgroundColor: "black" }} />
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default EmployeeModal;
