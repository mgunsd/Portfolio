import React, { useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { colors as c } from './colors';
import { fonts as f } from './fonts';

// const Mode = (
//   window.matchMedia &&
//   window.matchMedia('(prefers-color-scheme: dark)').matches
// ) ? 'dark' : 'light';

//I Prefer always dark mode.. 

const Mode = 'dark';
export const useTheme = () => useContext(ThemeContext);

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(Mode)
  return (
    <ThemeProvider
      theme={{
        colors: (themes[theme]).colors,
        fonts: (themes[theme]).fonts,
        setTheme, dark: (themes[theme]).dark,
        theme: theme
      }}
    >
      {children}
    </ThemeProvider>
  )
};

export default Theme;
export const themes = {
  light: {
    dark: false,
    colors: {
      text: c.dark,
      base: c.light,
    },
    fonts: {
      title: f.title,
      body: f.body,
      logo: f.logo,
      icon: f.icon,
    },
  },
  dark: {
    dark: true,
    colors: {
      text: c.light,
      base: c.dark,
    },
    fonts: {
      title: f.title,
      body: f.body,
      logo: f.logo,
      icon: f.icon,
    },
  },
};

// export const themes = {
//   default: {
//     dark: true,
//     colors: {
//       primary: c.turq,
//       body: c.white,
//       background: c.gray,
//       base: c.black,
//     },
//     fonts: {
//       title: f.title,
//       body: f.body,
//     },
//   }
// };