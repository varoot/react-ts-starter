import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { FC, memo } from 'react';
import useRefFocus from '../hooks/useRefFocus';
import { DialogComponentProps } from '../store/dialog/types';

interface Props extends DialogComponentProps<void> {
  name: string;
}

const HelloDialog: FC<Props> = (props) => {
  const { onClose, onExited, name, open } = props;
  const [buttonRef, focusButton] = useRefFocus<HTMLButtonElement>();

  return (
    <Dialog open={!!open} onClose={onClose} onEnter={focusButton} onExited={onExited}>
      <DialogTitle>Hello {name}</DialogTitle>
      <DialogActions>
        <Button ref={buttonRef} color="primary" onClick={onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export type HelloDialogProps = Props;
export default memo(HelloDialog);
