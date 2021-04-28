import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { FC, isValidElement, memo, ReactNode } from 'react';
import { useRefFocus } from '../hooks';
import { DialogComponentProps } from '../typings';

export interface SimpleDialogAction {
  /** Unique key for the button */
  id: string | number;
  /** Label for the button */
  label: ReactNode;
  /** Value to resolve when user clicks this button */
  value?: string;
  /** Whether button should be automatically focused when dialog opens */
  autoFocus?: boolean;
}

interface Props extends DialogComponentProps<string>, Pick<DialogProps, 'fullWidth' | 'maxWidth'> {
  /** Dialog title */
  title?: ReactNode;
  /** Dialog body message */
  content?: ReactNode;
  /** Action buttons */
  actions: SimpleDialogAction[];
}

/**
 * Render dialog with text message and buttons
 */
const SimpleDialog: FC<Props> = (props) => {
  const { actions, content, maxWidth, onResolve, title, ...otherProps } = props;
  const [buttonRef, focusButton] = useRefFocus<HTMLButtonElement>();

  return (
    <Dialog {...otherProps} onEnter={focusButton}>
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

export type SimpleDialogProps = Props;
export default memo(SimpleDialog);
