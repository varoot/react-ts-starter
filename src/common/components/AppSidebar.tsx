import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { FC, memo } from 'react';
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
const AppSidebar: FC<Props> = (props) => {
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
        <IconButton edge="end" onClick={onClose}>
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
};

export type AppSidebarProps = Props;
export default memo(AppSidebar);
