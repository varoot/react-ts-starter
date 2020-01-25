import { RootState } from '../index';
import { SnackbarItemExt } from './types';

export function getSnackbarItem(store: RootState): SnackbarItemExt | undefined {
  return store.snackbar.item;
}

export default { getSnackbarItem };
