import { Box, Typography, Button } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useDarkMode } from "../../../context/DarkModeContext";

function DarkmoodButton() {
  const { isDarkMode, colorMode, toggleDarkMode } = useDarkMode();
  return (
    <Box
      backgroundColor={isDarkMode ? "rgb(48 47 53)" : "#fefefe"}
      borderRadius="40px"
      display="flex"
      sx={{ width: "12vw", height: "8vh", float: "right" }}
      justifyContent="center"
      alignItems="center"
      boxShadow="0px 16px 24px 0px rgba(0, 0, 0, 0.02)"
    >
      <Button
        startIcon={
          isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />
        }
        onClick={toggleDarkMode}
        sx={{ width: "12vw", height: "8vh" }}
      >
        <Typography
          sx={{
            fontFamily: "Gilroy-Bold, sans-serif",
            color: isDarkMode ? "white" : "black",
          }}
        >
          {colorMode}
        </Typography>
      </Button>
    </Box>
  );
}
export default DarkmoodButton;
