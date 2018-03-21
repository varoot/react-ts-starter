import * as classNames from 'classnames';
import Typography from 'material-ui/Typography';
import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';
import * as React from 'react';

const logo = require('../assets/logo.svg');

type ClassKeys = 'root' | 'demo' | 'header' | 'padding' | 'logo';

const styles: StyleRulesCallback<ClassKeys> = (theme) => ({
  '@global': {
    code: {
      color: theme.palette.secondary.main,
      fontFamily: ['Consolas', 'monospace'],
    },
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: [['rotate(0deg)']],
    },
    to: {
      transform: [['rotate(360deg)']],
    },
  },
  demo: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.getContrastText(theme.palette.grey[900]),
  },
  logo: {
    animation: [['App-logo-spin', 'infinite', '20s', 'linear']],
    height: theme.spacing.unit * 10,
  },
  padding: {
    padding: theme.spacing.unit * 2,
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
          <div className={classes.demo}>
            <div className={classNames([classes.header, classes.padding])}>
              <img src={logo} className={classes.logo} alt="logo" />
              <Typography variant="display2" color="inherit">
                Welcome to React
              </Typography>
            </div>
            <Typography className={classes.padding}>
              To get started, edit <code>src/components/App.tsx</code> and save to reload.
            </Typography>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
