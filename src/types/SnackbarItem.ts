import SnackbarButton from './SnackbarButton';

interface SnackbarItem {
  button?: SnackbarButton;
  isLong?: boolean;
  message: string | JSX.Element;
}

export default SnackbarItem;
