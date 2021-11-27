import { Route, Switch } from 'react-router-dom';
import AppLayout from './common/components/AppLayout';
import routes from './common/constants/routes';
import Home from './demo/pages/Home';
import RoutingDemo from './demo/pages/RoutingDemo';

function App(): JSX.Element {
  return (
    <AppLayout>
      <Switch>
        <Route exact component={Home} path={routes.home} />
        <Route component={RoutingDemo} path={routes.routingDemo} />
      </Switch>
    </AppLayout>
  );
}

export default App;
