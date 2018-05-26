import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline>
        <App />
      </CssBaseline>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
