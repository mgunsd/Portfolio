import React from 'react';
import Routes from './Routes';
//import { GlobalStyles } from './styles/globalStyles';
import { ThemeProvider } from './context/ThemeContext.js';

const Wrappers = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
};

const App = () => <Wrappers />

export default App;