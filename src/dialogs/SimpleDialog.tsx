import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { FC, isValidElement, memo, ReactNode } from 'react';
import useRefFocus from '../hooks/useRefFocus';
import { DialogComponentProps } from '../store/dialog/types';

export interface SimpleDialogAction {
  id: string | number;
  label: ReactNode;
  value?: string;
  autoFocus?: boolean;
}

interface Props extends DialogComponentProps<string> {
  title?: ReactNode;
  content?: ReactNode;
  actions: SimpleDialogAction[];
}

const HelloDialog: FC<Props> = (props) => {
  const { actions, content, onClose, onExited, onResolve, open, title } = props;
  const [buttonRef, focusButton] = useRefFocus<HTMLButtonElement>();

  return (
    <Dialog open={!!open} onClose={onClose} onEnter={focusButton} onExited={onExited}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && (
        <DialogContent>
          {isValidElement(content) ? content : <DialogContentText>{content}</DialogContentText>}
        </DialogContent>
      )}
      <DialogActions>
        {actions.map((action) => (
          <Button
            key={action.id}
            ref={action.autoFocus ? buttonRef : undefined}
            color="primary"
            onClick={() => {
              onResolve(action.value);
            }}
          >
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export type HelloDialogProps = Props;
export default memo(HelloDialog);
