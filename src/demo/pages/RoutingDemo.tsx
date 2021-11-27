import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import routes from '../../common/constants/routes';
import { useRouteChangeDialog } from '../../common/hooks';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),

      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
  }),
  { name: 'RoutingDemo' },
);

/**
 * Routing demo
 */
function RoutingDemo(): JSX.Element {
  const { t } = useTranslation('demo');
  const classes = useStyles();
  const Prompt = useRouteChangeDialog();

  return (
    <div className={classes.root}>
      <Typography gutterBottom component="h2" variant="h4">
        {t('routingDemo.header')}
      </Typography>
      <Typography>{t('routingDemo.intro')}</Typography>
      <Prompt
        message={(location): string | boolean => {
          if (location.pathname !== routes.routingDemo) {
            return t('routingDemo.routeChangeMessage');
          }
          return false;
        }}
      />
    </div>
  );
}

export default memo(RoutingDemo);
