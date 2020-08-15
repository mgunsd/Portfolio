import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Work, Contact } from 'pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;