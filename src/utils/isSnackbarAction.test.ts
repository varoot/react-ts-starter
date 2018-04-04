import isSnackbarAction from './isSnackbarAction';

describe('isSnackbarAction', () => {
  it('should return false if param is not an object', () => {
    const action = 'test';
    expect(isSnackbarAction(action)).toBe(false);
  });

  it('should return false if param does not have a payload', () => {
    const action = {
      type: 'TEST_ACTION',
    };
    expect(isSnackbarAction(action)).toBe(false);
  });

  it('should return false if payload does not have snackbar key', () => {
    const action = {
      payload: {
        key: 'test',
      },
      type: 'TEST_ACTION',
    };
    expect(isSnackbarAction(action)).toBe(false);
  });

  it('should return false if snackbar does not have a message', () => {
    const action = {
      payload: {
        key: 'test',
        snackbar: {
          test: true,
        },
      },
      type: 'TEST_ACTION',
    };
    expect(isSnackbarAction(action)).toBe(false);
  });

  it('should return true if snackbar has a message', () => {
    const action = {
      payload: {
        key: 'test',
        snackbar: {
          message: 'Testing this snackbar',
        },
      },
      type: 'TEST_ACTION',
    };
    expect(isSnackbarAction(action)).toBe(true);
  });
});
