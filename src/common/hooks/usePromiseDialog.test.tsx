import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useCallback, useState } from 'react';
import PromiseDialogProvider from '../../PromiseDialogProvider';
import { fireEvent, render, waitFor } from '../../testUtils';
import { DialogComponentProps } from '../typings';
import { usePromiseDialog } from './usePromiseDialog';

describe('usePromiseDialog', () => {
  interface TestDialogWithMessageProps extends DialogComponentProps<boolean> {
    message: string;
  }

  function TestDialog(props: DialogComponentProps<boolean>): JSX.Element {
    const { onResolve, ...otherProps } = props;
    return (
      <Dialog {...otherProps}>
        <DialogActions>
          <Button onClick={() => onResolve(false)}>False</Button>
          <Button onClick={() => onResolve(true)}>True</Button>
        </DialogActions>
      </Dialog>
    );
  }

  function TestDialogWithMessage(props: TestDialogWithMessageProps): JSX.Element {
    const { onResolve, message, ...otherProps } = props;
    return (
      <Dialog {...otherProps}>
        <DialogTitle>{message}</DialogTitle>
        <DialogActions>
          <Button onClick={() => onResolve(false)}>False</Button>
          <Button onClick={() => onResolve(true)}>True</Button>
        </DialogActions>
      </Dialog>
    );
  }

  function TestPage(): JSX.Element {
    const openTestDialog = usePromiseDialog(TestDialog);
    const openTestDialogWithMessage = usePromiseDialog(TestDialogWithMessage);
    const [result, setResult] = useState('');

    const testDialog = useCallback(async () => {
      const value = await openTestDialog();
      if (typeof value === 'boolean') {
        setResult(value ? 'true' : 'false');
      }
    }, [openTestDialog]);

    const testDialogWithMessage = useCallback(async () => {
      const value = await openTestDialogWithMessage({ message: 'Hello' });
      if (typeof value === 'boolean') {
        setResult(value ? 'true' : 'false');
      }
    }, [openTestDialogWithMessage]);

    return (
      <div>
        <div data-testid="result">{result}</div>
        <Button onClick={testDialog}>Test dialog</Button>
        <Button onClick={testDialogWithMessage}>Test dialog with message</Button>
      </div>
    );
  }

  it('should open dialog when function is called', async () => {
    const { getByRole, queryByText, unmount } = render(<TestPage />, { wrapper: PromiseDialogProvider });

    // Dialog should not be rendered yet
    expect(queryByText('Hello')).toBeNull();

    // Click the button to open dialog
    const btn = getByRole('button', { name: 'Test dialog with message' });
    fireEvent.click(btn);

    // Expect to see the dialog message
    await waitFor(() => expect(queryByText('Hello')).toBeInTheDocument());

    // Should not throw error when component is unmounted
    unmount();

    // Dialog should be removed
    await waitFor(() => expect(queryByText('Hello')).toBeNull());
  });

  it('should resolve value when dialog is closed', async () => {
    const { getByTestId, getByRole } = render(<TestPage />, { wrapper: PromiseDialogProvider });

    // Result should be empty first
    const result = getByTestId('result');
    expect(result).toHaveTextContent(/^$/);

    // Click the button to open dialog
    const btn = getByRole('button', { name: 'Test dialog' });
    fireEvent.click(btn);

    // Expect to see the dialog button
    await waitFor(() => expect(getByRole('button', { name: 'True' })).toBeInTheDocument());

    fireEvent.click(getByRole('button', { name: 'True' }));

    // Should see value in the result
    await waitFor(() => expect(result).toHaveTextContent(/^true$/));
  });
});
