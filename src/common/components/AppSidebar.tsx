import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import makeStyles from '@mui/styles/makeStyles';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import sidebarItems from '../constants/sidebarItems';

interface Props {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 240;

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    menuItem: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 3),
      },
    },
    menuItemActive: {
      color: theme.palette.primary.main,
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      justifyContent: 'flex-end',
    },
  }),
  { name: 'AppSidebar' },
);

/**
 * Base layout for all pages
 */
function AppSidebar(props: Props): JSX.Element {
  const { onClose, open } = props;
  const classes = useStyles(props);
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDrawerPermanent = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.root}
      open={open}
      variant={isDrawerPermanent ? 'permanent' : 'temporary'}
      onClose={onClose}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton edge="end" size="large" onClick={onClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Toolbar>
      <div className={classes.drawerContainer}>
        <List>
          {sidebarItems.map(({ exact, link, title }) => (
            <ListItem
              key={title}
              button
              activeClassName={classes.menuItemActive}
              className={classes.menuItem}
              component={NavLink}
              exact={exact}
              to={link}
              onClick={onClose}
            >
              <ListItemText primary={t(title)} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Toolbar>
          <Typography variant="caption">{t('sidebar.disclaimer')}</Typography>
        </Toolbar>
      </div>
    </Drawer>
  );
}

export type AppSidebarProps = Props;
export default memo(AppSidebar);
