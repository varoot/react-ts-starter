import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import routes from '../routes';

const useStyles = makeStyles(
  (theme) => ({
    margin: {
      margin: theme.spacing(2, 0.5),
    },
    root: {
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.sm,
      padding: theme.spacing(2),
    },
  }),
  { name: 'Test' },
);

const Test: React.FC = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h3">
        Test Page
      </Typography>
      <Typography className={classes.margin}>
        <code>src/components/Test.tsx</code> is rendered when you visit <code>{routes.test}</code>.
      </Typography>
      <Typography className={classes.margin}>
        <Link component={RouterLink} to={routes.home}>
          Home
        </Link>
      </Typography>
    </div>
  );
};

export default React.memo(Test);
