/* eslint-disable import/prefer-default-export */
import { CommonStateRoot } from '../typings';

export function selectIsShowingSpinner(state: CommonStateRoot): boolean {
  return Object.keys(state.common.spinnerTokens).length > 0;
}
