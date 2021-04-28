import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ComponentType, FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouterProps, MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { store } from './store';
import theme from './theme';

interface Props {
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
const CoreProvider: FC<Props> = ({ children, getUserConfirmation, initialEntries }) => {
  return (
    <Provider store={store}>
      <Router getUserConfirmation={getUserConfirmation} initialEntries={initialEntries}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default CoreProvider;
