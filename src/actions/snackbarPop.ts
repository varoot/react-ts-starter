import ActionType from '../types/ActionType';

export interface SnackbarPopAction {
  type: ActionType.SnackbarPop;
}

function snackbarPop(): SnackbarPopAction {
  return {
    type: ActionType.SnackbarPop,
  };
}

export default snackbarPop;
