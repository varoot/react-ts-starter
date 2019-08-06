import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { Route, Switch } from 'react-router';
import routes from '../routes';
import { ThemeType } from '../theme';
import Home from './Home';
import NotFound from './NotFound';
import Test from './Test';
import TheSnackbar from './TheSnackbar';

const useStyles = makeStyles(
  (theme: ThemeType) => ({
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
