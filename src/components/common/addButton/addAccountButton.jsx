import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  addAccountButtonBox,
  addAccountButton,
} from "../../../styles/muiStyles";

function AddAccountButton({ handleAddClick, title }) {
  return (
    <Box sx={addAccountButtonBox}>
      <Button
        variant="contained"
        color="success"
        sx={addAccountButton}
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        {title}
      </Button>
    </Box>
  );
}
export default AddAccountButton;
