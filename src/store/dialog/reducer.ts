import { Reducer } from 'redux';
import ActionType from '../../types/ActionType';
import { DialogAction, DialogState } from './types';

const initialState: DialogState = {
  dialogs: [],
};

const dialogReducer: Reducer<DialogState, DialogAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DialogAdd: {
      return {
        dialogs: [
          ...state.dialogs,
          {
            ...action.payload,
            open: true,
          },
        ],
      };
    }
    case ActionType.DialogClearByOwnerId: {
      if (state.dialogs.length === 0) return state;
      return {
        dialogs: state.dialogs.map((dialog) =>
          dialog.open && dialog.ownerId === action.payload.ownerId ? { ...dialog, open: false } : dialog,
        ),
      };
    }
    case ActionType.DialogClose: {
      if (state.dialogs.length === 0) return state;
      return {
        dialogs: state.dialogs.map((dialog) =>
          dialog.open && dialog.key === action.payload.key ? { ...dialog, open: false } : dialog,
        ),
      };
    }
    case ActionType.DialogRemove: {
      if (state.dialogs.length === 0) return state;
      return {
        dialogs: state.dialogs.filter((dialog) => dialog.key !== action.payload.key),
      };
    }
    default:
      return state;
  }
};

export default dialogReducer;
