import { Reducer } from 'redux';
import { AppAction } from '../actions';
import ActionType from '../types/ActionType';
import SnackbarItem from '../types/SnackbarItem';
import isSnackbarAction from '../utils/isSnackbarAction';

interface State {
  items: SnackbarItem[];
}

const initialState: State = {
  items: [],
};

const snackbarReducers: Reducer<State> = (state = initialState, action: AppAction) => {
  if (isSnackbarAction(action)) {
    return {
      items: [...state.items, action.payload.snackbar],
    };
  }

  switch (action.type) {
    case ActionType.SnackbarPop:
      return {
        items: state.items.slice(1),
      };
  }

  return state;
};

export type SnackbarState = State;
export default snackbarReducers;
