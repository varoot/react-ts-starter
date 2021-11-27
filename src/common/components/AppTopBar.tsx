import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Menu from '@material-ui/icons/Menu';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onToggleSidebar: () => void;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
  { name: 'AppTopBar' },
);

/**
 * Base layout for all pages
 */
function AppTopBar(props: Props): JSX.Element {
  const { onToggleSidebar } = props;
  const classes = useStyles(props);
  const { t } = useTranslation('common');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <header className={classes.root}>
      <AppBar className={classes.appBar} elevation={trigger ? 4 : 0} position="fixed">
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              aria-label={t('topBar.menu')}
              className={classes.menuButton}
              color="inherit"
              edge="start"
              onClick={onToggleSidebar}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Typography className={classes.title} component="h1" variant="h6">
            {t('appTitle')}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export type AppTopBarProps = Props;
export default memo(AppTopBar);
