import { Box, Typography, Button } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useDarkMode } from "../../../context/DarkModeContext";
import {
  DarkmodeButtonFontStyle,
  DarkmodeButtonBoxStyle,
  DarkmodeButton,
} from "../../../styles/muiStyles";

function DarkmoodButton() {
  const { isDarkMode, colorMode, toggleDarkMode } = useDarkMode();
  return (
    <Box sx={DarkmodeButtonBoxStyle(isDarkMode)}>
      <Button
        startIcon={
          isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />
        }
        onClick={toggleDarkMode}
        sx={DarkmodeButton}
      >
        <Typography sx={DarkmodeButtonFontStyle(isDarkMode)}>
          {colorMode}
        </Typography>
      </Button>
    </Box>
  );
}
export default DarkmoodButton;
