import Typography from '@material-ui/core/Typography';
import { StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

type ClassKeys = 'root' | 'margin';

const styles: StyleRulesCallback<ClassKeys> = (theme) => ({
  margin: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 0.5}px`,
  },
  root: {
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing.unit * 2,
  },
});

type Props = {};

const Test: React.SFC<Props & WithStyles<ClassKeys>> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h3">
        Test Page
      </Typography>
      <Typography className={classes.margin}>
        <code>src/components/Test.tsx</code> is rendered when you visit <code>{routes.test}</code>.
      </Typography>
      <Typography className={classes.margin}>
        <Link to={routes.home}>Home</Link>
      </Typography>
    </div>
  );
};

export type TestProps = Props;
export default withStyles(styles)(Test);
