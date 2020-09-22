import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styles/m-normalize.css';
import Theme from 'styles/themes';
import { Routes, RenderRoutes } from 'routes';

const App = () =>
  <Theme>
    <Router>
      <RenderRoutes routes={Routes} />
    </Router>
  </Theme >

export default App;