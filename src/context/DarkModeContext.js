import React, { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colorMode = isDarkMode ? "Dark Mode" : "Light Mode";

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, colorMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
