import React from 'react';
import Routes from './Routes';
//import { GlobalStyles } from './styles/globalStyles';
import Theme from './styles/themes';

const Wrappers = () => {
  return (
    <Theme>
      <Routes />
    </Theme>
  )
};

const App = () => <Wrappers />

export default App;