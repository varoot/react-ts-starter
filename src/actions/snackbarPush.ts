import ActionType from '../types/ActionType';
import SnackbarAction from '../types/SnackbarAction';
import SnackbarItem from '../types/SnackbarItem';

interface SnackbarPushAction extends SnackbarAction {
  type: ActionType.SnackbarPush;
}

function snackbarPush(snackbar: SnackbarItem): SnackbarPushAction {
  return {
    payload: { snackbar },
    type: ActionType.SnackbarPush,
  };
}

export { SnackbarPushAction };
export default snackbarPush;
