import { RootState } from '../index';
import { DialogInfo } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDialogs(store: RootState): DialogInfo<any, any>[] {
  return store.dialog.dialogs;
}

export default { getDialogs };
