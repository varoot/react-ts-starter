import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import dialog from './dialog';
import snackbar from './snackbar';

const reducers = combineReducers({
  dialog,
  snackbar,
});

export type RootState = ReturnType<typeof reducers>;

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
