import { DialogProps } from '@material-ui/core/Dialog';
import { ComponentType, SyntheticEvent } from 'react';
import { ActionType, IdType } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogRejectFunc = (reason?: any) => void;
export type DialogResolveFunc<T> = (value?: T | PromiseLike<T> | undefined) => void;

export interface DialogComponentProps<T> {
  onClose: (event: SyntheticEvent, reason?: 'backdropClick' | 'escapeKeyDown') => void;
  onExited: DialogProps['onExited'];
  onResolve: DialogResolveFunc<T>;
  open: boolean;
}

export type DialogComponent<T, P> = ComponentType<DialogComponentProps<T> & P>;

export interface DialogInfo<T, P> {
  component: DialogComponent<T, P>;
  key: number;
  open: boolean;
  ownerId: IdType;
  props: P;
  reject: DialogRejectFunc;
  resolve: DialogResolveFunc<T>;
}

export interface DialogState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dialogs: DialogInfo<any, any>[];
}

export interface DialogAddAction<T, P> {
  type: ActionType.DialogAdd;
  payload: Omit<DialogInfo<T, P>, 'open'>;
}

export interface DialogClearByOwnerIdAction {
  type: ActionType.DialogClearByOwnerId;
  payload: {
    ownerId: IdType;
  };
}

export interface DialogCloseAction {
  type: ActionType.DialogClose;
  payload: {
    key: number;
  };
}

export interface DialogRemoveAction {
  type: ActionType.DialogRemove;
  payload: {
    key: number;
  };
}

export type DialogAction =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DialogAddAction<any, any> | DialogClearByOwnerIdAction | DialogCloseAction | DialogRemoveAction;
