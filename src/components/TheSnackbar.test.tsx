import React from 'react';
import { snackbarPop, snackbarPush } from '../actions';
import store from '../store';
import { act, fireEvent, render } from '../testUtils';
import TheSnackbar from './TheSnackbar';

jest.useFakeTimers();

describe('Component: TheSnackbar', () => {
  it('should render nothing by default', () => {
    const { container } = render(<TheSnackbar />);
    expect(container).toHaveTextContent(/^$/);
  });

  it('should render the snackbar message', () => {
    const callback = jest.fn();
    store.dispatch(snackbarPush({ message: 'Test Snackbar', button: { callback, label: 'OK' } }));
    const { container, getByText } = render(<TheSnackbar />);
    expect(container).toHaveTextContent('Test Snackbar');

    // Check that the button is rendered
    const okBtn = getByText('OK');
    expect(okBtn).toBeInTheDocument();

    // Check that callback is triggered
    fireEvent.click(okBtn as HTMLElement);
    expect(callback).toBeCalledTimes(1);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(container).toHaveTextContent(/^$/);
  });

  it('should not dismiss snackbar when clicking away', () => {
    store.dispatch(snackbarPush({ message: 'Test Clickaway' }));
    const { container } = render(<TheSnackbar />);

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

  it('should render only the first snackbar message', () => {
    store.dispatch(snackbarPush({ message: 'First Message', isLong: true }));
    store.dispatch(snackbarPush({ message: 'Another Snackbar' }));
    const { container } = render(<TheSnackbar />);
    expect(container).toHaveTextContent('First Message');
    store.dispatch(snackbarPop());
    store.dispatch(snackbarPop());
  });
});
