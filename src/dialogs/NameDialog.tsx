import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, FC, FormEvent, memo, useCallback, useState } from 'react';
import { DialogComponentProps } from '../store/dialog/types';

const NameDialog: FC<DialogComponentProps<string>> = (props) => {
  const { onClose, onExited, onResolve, open } = props;
  const [name, setName] = useState('');

  const handleUpdate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      onResolve(name.trim());
    },
    [name, onResolve],
  );

  return (
    <Dialog open={!!open} onClose={onClose} onExited={onExited}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>What&rsquo;s your name?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            When you submit your name, the promise will be resolved with the value.
            <br />
            If you close the dialog, the promise will be resolved with <code>undefined</code>
            <br />
            If you navigate away while this dialog is open, the promise will be rejected.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            label="Name"
            margin="normal"
            value={name}
            variant="outlined"
            onChange={handleUpdate}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" disabled={name.trim() === ''} type="submit">
            OK
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export type NameDialogProps = DialogComponentProps<string>;
export default memo(NameDialog);
