import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import { ComponentType, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouterProps, MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { store } from './store';
import theme from './theme';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

interface Props {
  children?: ReactNode;
  /** initial route for testing */
  initialEntries?: MemoryRouterProps['initialEntries'];
  /** Callback for displaying route change confirmation dialog */
  getUserConfirmation?: MemoryRouterProps['getUserConfirmation'];
}

let Router: ComponentType<BrowserRouterProps | MemoryRouterProps> = BrowserRouter;
if (process.env.JEST_WORKER_ID !== undefined) {
  Router = MemoryRouter;
}

/**
 * CoreProvider is rendered on all component unit tests. It provides:
 * - Redux store
 * - Router
 * - Material UI theme
 */
function CoreProvider(props: Props): JSX.Element {
  const { children, getUserConfirmation, initialEntries } = props;
  return (
    <Provider store={store}>
      <Router getUserConfirmation={getUserConfirmation} initialEntries={initialEntries}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      </Router>
    </Provider>
  );
}

export default CoreProvider;
