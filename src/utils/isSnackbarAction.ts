import SnackbarAction from '../types/SnackbarAction';

interface ObjectWithPayload extends Record<string, unknown> {
  payload: Record<string, unknown>;
}

interface ObjectWithSnackbarPayload extends ObjectWithPayload {
  payload: { snackbar: { message: unknown } };
}

function isObject(obj: unknown): obj is Record<string, unknown> {
  return obj && typeof obj === 'object';
}

function hasPayload(obj: Record<string, unknown>): obj is ObjectWithPayload {
  return obj.payload && typeof obj.payload === 'object';
}

function hasSnackbarPayload(obj: ObjectWithPayload): obj is ObjectWithSnackbarPayload {
  return obj.payload.snackbar && typeof obj.payload.snackbar === 'object';
}
function isSnackbarAction(action: unknown): action is SnackbarAction {
  return (
    isObject(action) && hasPayload(action) && hasSnackbarPayload(action) && Boolean(action.payload.snackbar.message)
  );
}

export default isSnackbarAction;
