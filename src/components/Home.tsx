import * as classNames from 'classnames';
import Typography from 'material-ui/Typography';
import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const logo = require('../assets/logo.svg');

type ClassKeys = 'root' | 'header' | 'margin' | 'padding' | 'logo';

const styles: StyleRulesCallback<ClassKeys> = (theme) => ({
  '@keyframes App-logo-spin': {
    from: {
      transform: [['rotate(0deg)']],
    },
    to: {
      transform: [['rotate(360deg)']],
    },
  },
  header: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.getContrastText(theme.palette.grey[900]),
  },
  logo: {
    animation: [['App-logo-spin', 'infinite', '20s', 'linear']],
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

interface Props {
  title?: string;
}

interface State {}

class Home extends React.PureComponent<Props & WithStyles<ClassKeys>, State> {
  static defaultProps = {
    title: 'Welcome to React',
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classNames([classes.header, classes.padding])}>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography variant="display2" color="inherit" component="h1">
            {this.props.title}
          </Typography>
        </div>
        <Typography className={classes.margin}>
          To get started, edit <code>src/components/App.tsx</code> and save to reload.
        </Typography>
        <Typography className={classes.margin}>
          <Link to={routes.test}>Test Router</Link>
        </Typography>
      </div>
    );
  }
}

export { Props as HomeProps, State as HomeState };
export default withStyles(styles)(Home);
