import { createStore, combineReducers } from 'redux';
import snackbar from './snackbar/reducer';

const reducers = combineReducers({
  snackbar,
});

export type RootState = ReturnType<typeof reducers>;

export default createStore(reducers);
