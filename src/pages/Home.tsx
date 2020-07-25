import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import logoSvg from '../assets/logo.svg';
import HelloDialog from '../dialogs/HelloDialog';
import NameDialog from '../dialogs/NameDialog';
import useOwnerId from '../hooks/useDialogOwnerId';
import routes from '../routes';
import { dialogOpen } from '../store/dialog/actions';
import { snackbarPush } from '../store/snackbar/actions';
import { ThunkDispatch } from '../types';

interface Props {
  title?: string;
}

const useStyles = makeStyles(
  (theme) => ({
    '@keyframes spin': {
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
      animation: '$spin infinite 20s linear',
      height: theme.spacing(10),
      pointerEvents: 'none',
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

const Home: FC<Props> = (props) => {
  const { title } = props;
  const classes = useStyles(props);
  const dispatch = useDispatch<ThunkDispatch>();
  const ownerId = useOwnerId();

  const testSnackbar = useCallback(() => {
    dispatch(
      snackbarPush({
        button: {
          callback: (): void => {
            // Snackbar is automatically dismissed when the button is clicked
          },
          label: 'Close',
        },
        message: 'Testing Snackbar',
      }),
    );
  }, [dispatch]);

  const testDialog = useCallback(async () => {
    try {
      const name = await dispatch(dialogOpen(ownerId, NameDialog));
      if (name) {
        await dispatch(dialogOpen(ownerId, HelloDialog, { name }));
      }
    } catch (err) {
      // Ignore error
    }
  }, [dispatch, ownerId]);

  return (
    <div className={classes.root}>
      <div className={clsx(classes.header, classes.padding)}>
        <img alt="logo" className={classes.logo} src={logoSvg} />
        <Typography color="inherit" component="h1" variant="h3">
          {title}
        </Typography>
      </div>
      <Typography className={classes.margin}>
        To get started, edit <code>src/pages/Home.tsx</code> and save to reload.
      </Typography>
      <Typography className={classes.margin}>
        <Link component={RouterLink} to={routes.test}>
          Test Router
        </Link>
      </Typography>
      <Button color="primary" onClick={testSnackbar}>
        Test Snackbar
      </Button>
      <Button color="primary" onClick={testDialog}>
        Test Dialog
      </Button>
    </div>
  );
};

Home.defaultProps = {
  title: 'Welcome to React',
};

export type HomeProps = Props;
export default memo(Home);
