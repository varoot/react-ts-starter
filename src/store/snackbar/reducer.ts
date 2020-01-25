import { Reducer } from 'redux';
import ActionType from '../../types/ActionType';
import isSnackbarAction from '../../utils/isSnackbarAction';
import { SnackbarAction, SnackbarState } from './types';

const initialState: SnackbarState = {
  item: undefined,
};

let id = 0;

export function resetSnackbarId(): void {
  id = 0;
}

export function generateSnackbarId(): number {
  id += 1;
  return id;
}

const snackbarReducers: Reducer<SnackbarState> = (
  state: SnackbarState = initialState,
  action: SnackbarAction,
): SnackbarState => {
  if (isSnackbarAction(action)) {
    return {
      item: { ...action.payload.snackbar, id: generateSnackbarId() },
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

export default snackbarReducers;
