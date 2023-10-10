import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import GoodMood from "../../assets/Emojis/Good mood.png";
import {
  AvgEmployeeMoodBoxStyle,
  MoodContentBoxStyle,
  MoodContentTextStyle,
  MoodContentSubTextStyle,
  MoodEmojiBoxStyle,
  MoodEmojiImgStyle,
  MoodEmojiDescStyle,
} from "../../styles/muiStyles";

function AvgEmployeeMoodBox() {
  const { t } = useTranslation();
  return (
    <Box sx={AvgEmployeeMoodBoxStyle()}>
      <Box>
        <Box sx={MoodContentBoxStyle}>
          <Typography variant="body1" sx={MoodContentTextStyle()}>
            {t("dashboard.averagemoodemployee")}
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "70px" }}>
          <Typography variant="body1" sx={MoodContentSubTextStyle()}>
            {t("dashboard.basedontheresult")}
          </Typography>
        </Box>
      </Box>
      <Box sx={MoodEmojiBoxStyle}>
        <img src={GoodMood} alt="Good Mood" style={MoodEmojiImgStyle} />
        <Typography variant="body1" sx={MoodEmojiDescStyle}>
          {t("dashboard.good")}
        </Typography>
      </Box>
    </Box>
  );
}

export default AvgEmployeeMoodBox;
