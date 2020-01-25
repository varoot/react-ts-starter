import ActionType from '../../types/ActionType';

export interface SnackbarButton {
  label: string;
  callback: () => void;
}

export interface SnackbarItem {
  button?: SnackbarButton;
  isLong?: boolean;
  message: string | JSX.Element;
}

export interface SnackbarItemExt extends SnackbarItem {
  id: number;
}

export interface SnackbarMessageAction {
  payload: {
    snackbar: SnackbarItem;
  };
}

export interface SnackbarPopAction {
  type: ActionType.SnackbarPop;
}

export interface SnackbarPushAction extends SnackbarMessageAction {
  type: ActionType.SnackbarPush;
}

export type SnackbarAction = SnackbarPopAction | SnackbarPushAction;

export interface SnackbarState {
  item: SnackbarItemExt | undefined;
}
