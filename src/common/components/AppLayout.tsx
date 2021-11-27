import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { memo, ReactNode, Suspense, useCallback, useState } from 'react';
import testIds from '../constants/testIds';
import AppSidebar from './AppSidebar';
import AppTopBar from './AppTopBar';
import SpinnerBackdrop from './SpinnerBackdrop';
import SpinnerOverlay from './SpinnerOverlay';

interface Props {
  children?: ReactNode;
}

/**
 * Base layout for all pages
 */
function AppLayout(props: Props): JSX.Element {
  const { children } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  return (
    <div>
      <Suspense fallback={<SpinnerOverlay id="AppLayout-suspense" />}>
        <AppTopBar onToggleSidebar={toggleSidebar} />
        <Box sx={{ display: 'flex' }}>
          <AppSidebar open={isSidebarOpen} onClose={toggleSidebar} />
          <Box component="main" data-testid={testIds.app.main} sx={{ flex: 1, minWidth: 0 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      </Suspense>
      <SpinnerBackdrop />
    </div>
  );
}

export type AppLayoutProps = Props;
export default memo(AppLayout);
