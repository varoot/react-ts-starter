import snackbarPop, { SnackbarPopAction } from './snackbarPop';
import snackbarPush, { SnackbarPushAction } from './snackbarPush';

type AppAction = SnackbarPopAction | SnackbarPushAction;

export { AppAction, snackbarPop, snackbarPush };
