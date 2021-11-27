import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import routes from '../../common/constants/routes';
import { useRouteChangeDialog } from '../../common/hooks';

/**
 * Routing demo
 */
function RoutingDemo(): JSX.Element {
  const { t } = useTranslation('demo');
  const Prompt = useRouteChangeDialog();

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
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
    </Box>
  );
}

export default memo(RoutingDemo);
