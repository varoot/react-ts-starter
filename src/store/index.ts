import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import snackbar from './snackbar';

const reducers = combineReducers({
  snackbar,
});

export type RootState = ReturnType<typeof reducers>;

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
