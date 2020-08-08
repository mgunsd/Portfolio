import React, { useState, createContext, useContext } from 'react'
import { themes } from '../styles/themes';
let deviceMode = 'dark';
export const ThemeContext = createContext({ colors: (themes[deviceMode]).colors });
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(deviceMode)
  return (
    <ThemeContext.Provider value={{ colors: (themes[theme]).colors, setTheme, dark: (themes[theme]).dark, theme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
