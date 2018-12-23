import snackbarPop, { SnackbarPopAction } from './snackbarPop';
import snackbarPush, { SnackbarPushAction } from './snackbarPush';

export type AppAction = SnackbarPopAction | SnackbarPushAction;

export { snackbarPop, snackbarPush };
