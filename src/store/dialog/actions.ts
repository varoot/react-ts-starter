import { ActionType, IdType, ThunkAction } from '../../types';
import Counter from '../../utils/Counter';
import { getDialogs } from './selectors';
import {
  DialogAddAction,
  DialogClearByOwnerIdAction,
  DialogCloseAction,
  DialogComponent,
  DialogRemoveAction,
} from './types';

export const counter = new Counter();

export function dialogAdd<T, P>(payload: DialogAddAction<T, P>['payload']): DialogAddAction<T, P> {
  return {
    type: ActionType.DialogAdd,
    payload,
  };
}

function getClearByOwnerIdAction(ownerId: IdType): DialogClearByOwnerIdAction {
  return {
    type: ActionType.DialogClearByOwnerId,
    payload: { ownerId },
  };
}

export function dialogClearByOwnerId(ownerId: IdType): ThunkAction<void> {
  return (dispatch, getState) => {
    const dialogs = getDialogs(getState());
    for (const dialog of dialogs) {
      if (dialog.ownerId === ownerId) {
        dialog.reject();
      }
    }
    dispatch(getClearByOwnerIdAction(ownerId));
  };
}

export function dialogClose(key: number): DialogCloseAction {
  return {
    type: ActionType.DialogClose,
    payload: { key },
  };
}

export function dialogOpen<T>(
  ownerId: IdType,
  component: DialogComponent<T, void>,
): ThunkAction<Promise<T | undefined>>;
export function dialogOpen<T, P>(
  ownerId: IdType,
  component: DialogComponent<T, P>,
  props: DialogAddAction<T, P>['payload']['props'],
): ThunkAction<Promise<T | undefined>>;
export function dialogOpen<T, P>(
  ownerId: IdType,
  component: DialogComponent<T, P>,
  props?: DialogAddAction<T, P>['payload']['props'],
): ThunkAction<Promise<T | undefined>> {
  return async (dispatch): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      dispatch(
        dialogAdd({
          key: counter.next().value,
          component,
          ownerId,
          props,
          resolve,
          reject,
        }),
      );
    });
  };
}

export function dialogRemove(key: number): DialogRemoveAction {
  return {
    type: ActionType.DialogRemove,
    payload: { key },
  };
}

export default {
  add: dialogAdd,
  close: dialogClose,
  clearByOwnerId: dialogClearByOwnerId,
  open: dialogOpen,
  remove: dialogRemove,
};
