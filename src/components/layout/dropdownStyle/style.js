const dropdownStyles = (item, list, theme, isDarkMode) => {
  return {
    fontWeight:
      list.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    backgroundColor: isDarkMode ? "rgb(48 47 53)" : "white",
    color: isDarkMode ? "white" : "black",
  };
};
export default dropdownStyles;
