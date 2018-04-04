import SnackbarItem from './SnackbarItem';

interface SnackbarAction {
  payload: {
    snackbar: SnackbarItem;
  };
}

export default SnackbarAction;
