import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import GlobalSnackbar from '../components/GlobalSnackbar';
import routes from '../routes';
import Home from './Home';
import NotFound from './NotFound';
import Test from './Test';

const useStyles = makeStyles(
  (theme) => ({
    '@global': {
      code: {
        color: theme.palette.secondary.main,
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
    },
    root: {},
  }),
  { name: 'App' },
);

const App: FC = (props) => {
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
      <GlobalSnackbar />
    </div>
  );
};

export default App;
