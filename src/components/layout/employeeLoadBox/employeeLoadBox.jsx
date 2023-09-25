import { Box } from "@mui/material";
import ProgressLine from "../../LinearProgressGraphs/progressline";
import EmojiBox from "../../LinearProgressGraphs/emojiBox";
import Percentage from "../../LinearProgressGraphs/percentagecomponent";
import LoadType from "../../LinearProgressGraphs/loadType";
import { LoadBox, ProgressBox, ProgressText } from "../muiStyles";

function EmployeeLoadBox({ emoji, value, color, text, background, border }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          ...LoadBox,
          background,
          border,
        }}
      >
        <EmojiBox emoji={emoji} />
      </Box>
      <Box sx={ProgressBox}>
        <ProgressLine value={value} color={color} />
        <Box sx={ProgressText}>
          <LoadType text={text} />
          <Percentage perc={`%${value}`} />
        </Box>
      </Box>
    </Box>
  );
}

export default EmployeeLoadBox;
