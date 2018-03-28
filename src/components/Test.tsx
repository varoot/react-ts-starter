import Typography from 'material-ui/Typography';
import { StyleRulesCallback, WithStyles, withStyles } from 'material-ui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

type ClassKeys = 'root' | 'margin';

const styles: StyleRulesCallback<ClassKeys> = (theme) => ({
  margin: {
    margin: [[theme.spacing.unit * 2, theme.spacing.unit * 0.5]],
  },
  root: {
    margin: [[0, 'auto']],
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing.unit * 2,
  },
});

interface Props {}

const Test: React.SFC<Props & WithStyles<ClassKeys>> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="display2" component="h1">
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

export { Props };
export default withStyles(styles)(Test);
