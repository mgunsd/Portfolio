import React, { useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { colors as c } from './colors';

const Mode = (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'light' : 'dark';

export const useTheme = () => useContext(ThemeContext);

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(Mode)
  return (
    <ThemeProvider
      theme={{
        colors: (themes[theme]).colors,
        setTheme, dark: (themes[theme]).dark,
        theme: theme
      }}

    >{children}</ThemeProvider>
  )
};

export default Theme;

export const themes = {
  light: {
    dark: false,
    colors: {
      text: c.dark,
      base: c.light,
    }
  },
  dark: {
    dark: true,
    colors: {
      text: c.light,
      base: c.dark,
    }
  },
};




// export const themes = {
//   light: {
//     dark: false,
//     colors: {
//       text: c.dark,
//       base: c.light4,
//       background: c.light,
//       card: c.light2,
//       primary: c.pri,
//       secondary: c.sec,

//       headerBackground: c.light4,
//       buttonText: c.light,
//       button: c.dark,
//       placeholder: c.light5,
//       altButton: c.light2,
//     }
//   },
//   dark: {
//     dark: true,
//     colors: {
//       text: c.light,
//       base: c.dark4,
//       background: c.dark,
//       card: c.dark2,
//       primary: c.sec,
//       secondary: c.pri,

//       headerBackground: c.dark4,
//       buttonText: c.dark,
//       button: c.light,
//       placeholder: c.dark1,
//       altButton: c.dark2,
//     }
//   },
// };
