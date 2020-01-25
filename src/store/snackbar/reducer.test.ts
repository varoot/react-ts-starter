import { snackbarPop, snackbarPush } from './actions';
import snackbarReducers, { generateSnackbarId, resetSnackbarId } from './reducer';
import { SnackbarState } from './types';

describe('snackbar reducer', () => {
  beforeEach(() => {
    resetSnackbarId();
  });

  it('should not change state for unknown actions', () => {
    const oldState: SnackbarState = {
      item: undefined,
    };

    const action = {
      type: 'TEST_ACTION',
    };

    const newState = snackbarReducers(oldState, action);

    expect(newState).toBe(oldState);
  });

  it('should add snackbar if exists on the payload', () => {
    const oldState: SnackbarState = {
      item: undefined,
    };

    const action = {
      payload: {
        otherProps: 'test',
        snackbar: {
          message: 'Test Message',
        },
      },
      type: 'TEST_ACTION',
    };

    const newState = snackbarReducers(oldState, action);

    expect(newState).toEqual({
      item: { id: 1, message: 'Test Message' },
    });
  });

  it('should add new snackbar to the end of the list', () => {
    const oldState: SnackbarState = {
      item: { id: generateSnackbarId(), message: 'First' },
    };

    const action = snackbarPush({ message: 'Second' });

    const newState = snackbarReducers(oldState, action);

    expect(newState).toEqual({
      item: { id: 2, message: 'Second' },
    });
  });

  it('should remove the first message with SnackbarPop action', () => {
    const oldState: SnackbarState = {
      item: { id: generateSnackbarId(), message: 'First' },
    };

    const action = snackbarPop();

    const newState = snackbarReducers(oldState, action);

    expect(newState).toEqual({
      item: undefined,
    });
  });
});
