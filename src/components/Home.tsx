import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { snackbarPush } from '../actions';
import logoSvg from '../assets/logo.svg';
import routes from '../routes';
import { ThemeType } from '../theme';

interface Props {
  title?: string;
}

type ClassKeys = 'root' | 'header' | 'margin' | 'padding' | 'logo';

const useStyles = makeStyles<ThemeType, Props, ClassKeys>(
  (theme) => ({
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
      height: theme.spacing(10),
    },
    margin: {
      margin: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(2),
    },
    root: {
      textAlign: 'center',
    },
  }),
  { name: 'Home' },
);

const Home: React.FC<Props> = (props) => {
  const { title } = props;
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const testSnackbar = useCallback(() => {
    dispatch(
      snackbarPush({
        button: {
          callback: () => {
            // Snackbar is automatically dismissed when the button is clicked
          },
          label: 'Close',
        },
        message: 'Testing Snackbar',
      }),
    );
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classNames([classes.header, classes.padding])}>
        <img src={logoSvg} className={classes.logo} alt="logo" />
        <Typography color="inherit" component="h1" variant="h3">
          {title}
        </Typography>
      </div>
      <Typography className={classes.margin}>
        To get started, edit <code>src/components/App.tsx</code> and save to reload.
      </Typography>
      <Typography className={classes.margin}>
        <Link component={RouterLink} to={routes.test}>
          Test Router
        </Link>
      </Typography>
      <Button color="primary" onClick={testSnackbar} variant="contained">
        Test Snackbar
      </Button>
    </div>
  );
};

Home.defaultProps = {
  title: 'Welcome to React',
};

export type HomeProps = Props;
export default React.memo(Home);
