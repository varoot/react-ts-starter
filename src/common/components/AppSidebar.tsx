import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
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
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import sidebarItems from '../constants/sidebarItems';

interface Props {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 240;

/**
 * Base layout for all pages
 */
function AppSidebar(props: Props): JSX.Element {
  const { onClose, open } = props;
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDrawerPermanent = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Drawer
      open={open}
      sx={{
        flexShrink: 0,
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant={isDrawerPermanent ? 'permanent' : 'temporary'}
      onClose={onClose}
    >
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton edge="end" size="large" onClick={onClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {sidebarItems.map(({ exact, link, title }) => (
            <ListItem
              key={title}
              button
              activeClassName="active"
              component={NavLink}
              exact={exact}
              sx={{
                px: { sm: 3 },
                py: { sm: 1 },
                '&.active': {
                  color: 'primary.main',
                },
              }}
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
      </Box>
    </Drawer>
  );
}

export type AppSidebarProps = Props;
export default memo(AppSidebar);
