import { Box, Modal, Fade, Grid, List, Backdrop } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import NumbersIcon from "@mui/icons-material/Numbers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { previewModalStyle } from "../muiStyles";
import { useDarkMode } from "../../../context/DarkModeContext";
import ModalListItem from "../modalListItem";

function ProjectModal({ open, handleClose, rowsData, getResourceNames }) {
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
                  label="project.id"
                  value={rowsData.id}
                  AvatarIcon={NumbersIcon}
                />
                <ModalListItem
                  label="project.name"
                  value={rowsData.name}
                  AvatarIcon={WorkIcon}
                />
                <ModalListItem
                  label="project.startDate"
                  value={rowsData.start_date}
                  AvatarIcon={CalendarMonthIcon}
                />
                <ModalListItem
                  label="project.lastDate"
                  value={rowsData.end_date}
                  AvatarIcon={CalendarMonthIcon}
                />
                <ModalListItem
                  label="project.duration"
                  value={rowsData.duration}
                  AvatarIcon={ScheduleIcon}
                />
                <ModalListItem
                  label="project.description"
                  value={rowsData.description}
                  AvatarIcon={DescriptionIcon}
                />
                <ModalListItem
                  label="project.ResourseList"
                  value={getResourceNames(rowsData.resource_list)}
                  AvatarIcon={ListAltIcon}
                />
              </List>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ProjectModal;
