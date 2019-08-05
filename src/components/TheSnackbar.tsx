import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { snackbarPop } from '../actions';
import snackbarConfig from '../config/snackbarConfig';
import { getSnackbarItemFirst } from '../selectors';

const TheSnackbar: React.FC = (props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const snackbarItem = useSelector(getSnackbarItemFirst);

  useEffect(() => setIsOpen(snackbarItem !== undefined), [snackbarItem]);

  const handleClose = useCallback((event: React.SyntheticEvent<HTMLElement>, reason: string) => {
    if (reason !== 'clickaway') {
      setIsOpen(false);
    }
  }, []);

  const checkExit = useCallback(() => dispatch(snackbarPop()), [dispatch]);

  const actionButton = useMemo((): JSX.Element | null => {
    if (snackbarItem === undefined || snackbarItem.button === undefined) {
      return null;
    }

    const callback = (event: React.MouseEvent<HTMLElement>): void => {
      handleClose(event, 'action');
      if (snackbarItem.button) {
        snackbarItem.button.callback();
      }
    };

    return (
      <Button color="secondary" onClick={callback} size="small">
        {snackbarItem.button.label}
      </Button>
    );
  }, [handleClose, snackbarItem]);

  const duration =
    snackbarItem !== undefined && Boolean(snackbarItem.isLong)
      ? snackbarConfig.duration.long
      : snackbarConfig.duration.short;

  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      autoHideDuration={duration}
      action={actionButton}
      message={<span id="message-id">{snackbarItem === undefined ? '' : snackbarItem.message}</span>}
      open={isOpen}
      onClose={handleClose}
      onExited={checkExit}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
    />
  );
};

export default React.memo(TheSnackbar);
