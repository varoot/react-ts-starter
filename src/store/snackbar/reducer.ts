import { Reducer } from 'redux';
import ActionType from '../../types/ActionType';
import Counter from '../../utils/Counter';
import isSnackbarAction from '../../utils/isSnackbarAction';
import { SnackbarAction, SnackbarState } from './types';

const initialState: SnackbarState = {
  item: undefined,
};

export const counter = new Counter();

const snackbarReducer: Reducer<SnackbarState> = (
  state: SnackbarState = initialState,
  action: SnackbarAction,
): SnackbarState => {
  if (isSnackbarAction(action)) {
    return {
      item: { ...action.payload.snackbar, id: counter.next().value },
    };
  }

  switch (action.type) {
    case ActionType.SnackbarPop:
      return {
        item: undefined,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
