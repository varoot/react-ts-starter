import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch } from 'react-router';
import routes from '../routes';
import Home from './Home';
import NotFound from './NotFound';
import Test from './Test';
import TheSnackbar from './TheSnackbar';

const useStyles = makeStyles(
  (theme) => ({
    '@global': {
      code: {
        color: theme.palette.secondary.main,
        fontFamily: 'Consolas, monospace',
      },
    },
    root: {},
  }),
  { name: 'App' },
);

const App: React.FC = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <main>
        <Switch>
          <Route exact component={Home} path={routes.home} />
          <Route component={Test} path={routes.test} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <TheSnackbar />
    </div>
  );
};

export default App;
