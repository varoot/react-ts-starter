import ActionType from '../../types/ActionType';
import { SnackbarPopAction, SnackbarPushAction, SnackbarItem } from './types';

export function snackbarPop(): SnackbarPopAction {
  return {
    type: ActionType.SnackbarPop,
  };
}

export function snackbarPush(snackbar: SnackbarItem): SnackbarPushAction {
  return {
    payload: { snackbar },
    type: ActionType.SnackbarPush,
  };
}

export default { snackbarPop, snackbarPush };
