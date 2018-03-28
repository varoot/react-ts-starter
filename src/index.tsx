import CssBaseline from 'material-ui/CssBaseline';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline>
      <App />
    </CssBaseline>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
