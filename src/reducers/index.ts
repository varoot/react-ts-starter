import { combineReducers } from 'redux';
import snackbarReducers, { SnackbarState } from './snackbarReducers';

interface State {
  snackbar: SnackbarState;
}

const reducers = combineReducers<State>({
  snackbar: snackbarReducers,
});

export type StoreState = State;
export default reducers;
