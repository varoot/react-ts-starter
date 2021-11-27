import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { memo, ReactNode, Suspense, useCallback, useState } from 'react';
import testIds from '../constants/testIds';
import AppSidebar from './AppSidebar';
import AppTopBar from './AppTopBar';
import SpinnerBackdrop from './SpinnerBackdrop';
import SpinnerOverlay from './SpinnerOverlay';

interface Props {
  children?: ReactNode;
}

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    body: {
      display: 'flex',
    },
    main: {
      flex: 1,
      minWidth: 0,
    },
  }),
  { name: 'AppLayout' },
);

/**
 * Base layout for all pages
 */
function AppLayout(props: Props): JSX.Element {
  const { children } = props;
  const classes = useStyles(props);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  return (
    <div className={classes.root}>
      <Suspense fallback={<SpinnerOverlay id="AppLayout-suspense" />}>
        <AppTopBar onToggleSidebar={toggleSidebar} />
        <div className={classes.body}>
          <AppSidebar open={isSidebarOpen} onClose={toggleSidebar} />
          <main className={classes.main} data-testid={testIds.app.main}>
            <Toolbar />
            {children}
          </main>
        </div>
      </Suspense>
      <SpinnerBackdrop />
    </div>
  );
}

export type AppLayoutProps = Props;
export default memo(AppLayout);
