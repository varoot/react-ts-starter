import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onToggleSidebar: () => void;
}

/**
 * Base layout for all pages
 */
function AppTopBar(props: Props): JSX.Element {
  const { onToggleSidebar } = props;
  const { t } = useTranslation('common');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <header>
      <AppBar elevation={trigger ? 4 : 0} position="fixed" sx={{ zIndex: 'modal' }}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              aria-label={t('topBar.menu')}
              color="inherit"
              edge="start"
              size="large"
              sx={{ mr: 2 }}
              onClick={onToggleSidebar}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Typography component="h1" sx={{ flexGrow: 1 }} variant="h6">
            {t('appTitle')}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export type AppTopBarProps = Props;
export default memo(AppTopBar);
