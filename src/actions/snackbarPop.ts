import ActionType from '../types/ActionType';

interface SnackbarPopAction {
  type: ActionType.SnackbarPop;
}

function snackbarPop(): SnackbarPopAction {
  return {
    type: ActionType.SnackbarPop,
  };
}

export { SnackbarPopAction };
export default snackbarPop;
