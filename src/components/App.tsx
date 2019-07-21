import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { Route, Switch } from 'react-router';
import routes from '../routes';
import { ThemeType } from '../theme';
import Home from './Home';
import NotFound from './NotFound';
import Test from './Test';
import TheSnackbar from './TheSnackbar';

interface Props {}
type ClassKeys = 'root';

const useStyles = makeStyles<ThemeType, Props, ClassKeys>(
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

const App: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <main>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.test} component={Test} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <TheSnackbar />
    </div>
  );
};

export type AppProps = Props;
export default App;
