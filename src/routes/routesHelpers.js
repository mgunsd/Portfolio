import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />
      })}
      <Redirect to={'/not-found'} />
    </Switch>
  );
};

// export const ProtectedRoute = props => {
//   if (!localStorage.getItem('user')) {
//     alert('You need to log in to access app routes');
//     return <Redirect to={'/onboarding/login-test'} />;
//   }
//   return (
//     <RenderRoutes {...props} />
//   )
// };