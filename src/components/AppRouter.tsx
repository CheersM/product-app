import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteNames, routes } from '../router';

function AppRouter() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
      ))}
      <Redirect to={RouteNames.HOME} />
    </Switch>
  );
}

export default AppRouter;
