import { snackbarPop } from '../actions';
import snackbarReducers, { SnackbarState } from './snackbarReducers';

describe('snackbarReducers', () => {
  it('should not change state for unknown actions', () => {
    const oldState: SnackbarState = {
      items: [],
    };

    const action = {
      type: 'TEST_ACTION',
    };

    const newState = snackbarReducers(oldState, action);

    expect(newState).toBe(oldState);
  });

  it('should add snackbar if exists on the payload', () => {
    const oldState: SnackbarState = {
      items: [],
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
      items: [{ message: 'Test Message' }],
    });
  });

  it('should add new snackbar to the end of the list', () => {
    const oldState: SnackbarState = {
      items: [{ message: 'First' }],
    };

    const action = {
      payload: {
        otherProps: 'test',
        snackbar: { message: 'Second' },
      },
      type: 'PUSH_SNACKBAR',
    };

    const newState = snackbarReducers(oldState, action);

    expect(newState).toEqual({
      items: [{ message: 'First' }, { message: 'Second' }],
    });
  });

  it('should remove the first message with SnackbarPop action', () => {
    const oldState: SnackbarState = {
      items: [{ message: 'First' }, { message: 'Second' }],
    };

    const action = snackbarPop();

    const newState = snackbarReducers(oldState, action);

    expect(newState).toEqual({
      items: [{ message: 'Second' }],
    });
  });
});
