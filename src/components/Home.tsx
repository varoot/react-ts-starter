import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  StyleRulesCallback,
  StyledComponentProps,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { snackbarPush } from '../actions';
import routes from '../routes';

const logo = require('../assets/logo.svg');

type ClassKeys = 'root' | 'header' | 'margin' | 'padding' | 'logo';

const styles: StyleRulesCallback<ClassKeys> = (theme) => ({
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  header: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.getContrastText(theme.palette.grey[900]),
  },
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: theme.spacing.unit * 10,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit * 2,
  },
  root: {
    textAlign: 'center',
  },
});

interface ComponentProps {
  title?: string;
}

interface DispatchProps {
  snackbarPush: typeof snackbarPush;
}

interface State {}

type Props = ComponentProps & DispatchProps;

class Home extends React.PureComponent<Props & WithStyles<ClassKeys>, State> {
  static defaultProps = {
    title: 'Welcome to React',
  };

  testSnackbar = () => {
    this.props.snackbarPush({
      button: {
        callback: () => {
          // Snackbar is automatically dismissed when the button is clicked
        },
        label: 'Close',
      },
      message: 'Testing Snackbar',
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classNames([classes.header, classes.padding])}>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography color="inherit" component="h1" variant="h3">
            {this.props.title}
          </Typography>
        </div>
        <Typography className={classes.margin}>
          To get started, edit <code>src/components/App.tsx</code> and save to reload.
        </Typography>
        <Typography className={classes.margin}>
          <Link to={routes.test}>Test Router</Link>
        </Typography>
        <Button color="primary" onClick={this.testSnackbar} variant="contained">
          Test Snackbar
        </Button>
      </div>
    );
  }
}

const StyledComponent = withStyles(styles)(Home);

export type HomeProps = Props & StyledComponentProps<ClassKeys>;
export { State as HomeState, StyledComponent as TestComponent };

export default connect(
  undefined,
  { snackbarPush },
)(StyledComponent);
