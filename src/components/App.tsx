import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';
import * as React from 'react';
import { Route, Switch } from 'react-router';
import routes from '../routes';
import Home from './Home';
import NotFound from './NotFound';
import Test from './Test';
import TheSnackbar from './TheSnackbar';

type ClassKeys = 'root';

const styles: StyleRulesCallback<ClassKeys> = (theme) => ({
  '@global': {
    code: {
      color: theme.palette.secondary.main,
      fontFamily: ['Consolas', 'monospace'],
    },
  },
  root: {},
});

interface Props {}

interface State {}

class App extends React.Component<Props & WithStyles<ClassKeys>, State> {
  render() {
    const { classes } = this.props;
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
  }
}

export { Props as AppProps, State as AppState };
export default withStyles(styles)(App);
