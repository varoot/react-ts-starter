import { StoreState } from '../reducers';
import SnackbarItem from '../types/SnackbarItem';

function getSnackbarItemFirst(store: StoreState): SnackbarItem | undefined {
  return store.snackbar.items[0];
}

export default getSnackbarItemFirst;
