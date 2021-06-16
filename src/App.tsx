import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './common/components/AppLayout';
import routes from './common/constants/routes';
import Home from './demo/pages/Home';
import RoutingDemo from './demo/pages/RoutingDemo';
import Game from './game/pages/Game';

const App: FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route exact component={Home} path={routes.home} />
        <Route component={RoutingDemo} path={routes.routingDemo} />
        <Route component={Game} path={routes.game} />
      </Switch>
    </AppLayout>
  );
};

export default App;
