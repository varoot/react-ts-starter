import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import React, { FC, memo, MouseEvent, SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import snackbarConfig from '../config/snackbarConfig';
import { snackbarPop } from '../store/snackbar/actions';
import { getSnackbarItem } from '../store/snackbar/selectors';

const GlobalSnackbar: FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const snackbarItem = useSelector(getSnackbarItem);

  useEffect(() => setIsOpen(snackbarItem !== undefined), [snackbarItem]);

  const handleClose = useCallback((event: SyntheticEvent<HTMLElement>, reason: string) => {
    if (reason !== 'clickaway') {
      setIsOpen(false);
    }
  }, []);

  const checkExit = useCallback(() => dispatch(snackbarPop()), [dispatch]);

  const actionButton = useMemo((): JSX.Element | null => {
    if (snackbarItem === undefined || snackbarItem.button === undefined) {
      return null;
    }

    const callback = (event: MouseEvent<HTMLElement>): void => {
      handleClose(event, 'action');
      if (snackbarItem.button) {
        snackbarItem.button.callback();
      }
    };

    return (
      <Button color="secondary" size="small" onClick={callback}>
        {snackbarItem.button.label}
      </Button>
    );
  }, [handleClose, snackbarItem]);

  const duration = snackbarItem?.isLong ? snackbarConfig.duration.long : snackbarConfig.duration.short;

  return (
    <Snackbar
      key={snackbarItem?.id}
      action={actionButton}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      autoHideDuration={duration}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{snackbarItem === undefined ? '' : snackbarItem.message}</span>}
      open={isOpen}
      onClose={handleClose}
      onExited={checkExit}
    />
  );
};

export default memo(GlobalSnackbar);
