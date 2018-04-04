import SnackbarAction from '../types/SnackbarAction';

// tslint:disable-next-line:no-any
function isSnackbarAction(action: any): action is SnackbarAction {
  return (
    Boolean(action) &&
    typeof action === 'object' &&
    Boolean(action.payload) &&
    typeof action.payload === 'object' &&
    Boolean(action.payload.snackbar) &&
    typeof action.payload.snackbar === 'object' &&
    Boolean(action.payload.snackbar.message)
  );
}

export default isSnackbarAction;
