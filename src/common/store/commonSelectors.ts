/* eslint-disable import/prefer-default-export */

import { RootState } from '../../store';

export function selectIsShowingSpinner(state: RootState): boolean {
  return Object.keys(state.common.spinnerTokens).length > 0;
}
