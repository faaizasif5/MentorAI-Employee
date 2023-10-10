import { useDarkMode } from "../context/DarkModeContext";

const isdarkmode = () => {
  const { isDarkMode } = useDarkMode();
  return isDarkMode;
};
export default isdarkmode;
