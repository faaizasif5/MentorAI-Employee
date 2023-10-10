import isdarkmode from "../../../helpers/darkmodeHelper";

const dropdownStyles = (item, list, theme) => {
  return {
    fontWeight:
      list.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    backgroundColor: isdarkmode() ? "rgb(48 47 53)" : "white",
    color: isdarkmode() ? "white" : "black",
    "&:hover": {
      backgroundColor: "green",
      color: isdarkmode() ? theme.palette.common.white : "black",
    },
  };
};
export default dropdownStyles;
