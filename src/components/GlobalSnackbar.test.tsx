import React from 'react';
import store from '../store';
import { snackbarPush } from '../store/snackbar/actions';
import { act, fireEvent, render } from '../testUtils';
import GlobalSnackbar from './GlobalSnackbar';

jest.useFakeTimers();

describe('GlobalSnackbar', () => {
  it('should render nothing by default', () => {
    const { container } = render(<GlobalSnackbar />);
    expect(container).toHaveTextContent(/^$/);
  });

  it('should render the snackbar message', () => {
    const callback = jest.fn();
    store.dispatch(snackbarPush({ message: 'Test Snackbar', button: { callback, label: 'OK' } }));
    const { container, getByText } = render(<GlobalSnackbar />);
    expect(container).toHaveTextContent('Test Snackbar');

    // Check that the button is rendered
    const okBtn = getByText('OK');
    if (!(okBtn instanceof HTMLElement)) {
      fail('OK button is not an HTML element');
    }

    // Check that callback is triggered
    fireEvent.click(okBtn);
    expect(callback).toBeCalledTimes(1);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(container).toHaveTextContent(/^$/);
  });

  it('should not dismiss snackbar when clicking away', () => {
    store.dispatch(snackbarPush({ message: 'Test Clickaway' }));
    const { container } = render(<GlobalSnackbar />);

    // Click away
    fireEvent.click(container);

    // First timer is for the duration of snackbar
    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(container).toHaveTextContent('Test Clickaway');

    // Second timer is for transition
    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(container).toHaveTextContent(/^$/);
  });
});
