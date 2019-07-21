import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouterProps } from 'react-router';
import { BrowserRouter, BrowserRouterProps, MemoryRouter } from 'react-router-dom';
import store from './store';
import theme from './theme';

interface Props {
  initialEntries?: MemoryRouterProps['initialEntries'];
}

let Router: React.ComponentClass<BrowserRouterProps | MemoryRouterProps, unknown> = BrowserRouter;
if (process.env.JEST_WORKER_ID !== undefined) {
  Router = MemoryRouter;
}

const AppProvider: React.FC<Props> = ({ children, initialEntries }) => {
  return (
    <Provider store={store}>
      <Router initialEntries={initialEntries}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProvider;
