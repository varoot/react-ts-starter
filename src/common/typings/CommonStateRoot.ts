export interface CommonState {
  spinnerTokens: Record<string, boolean>;
}

export interface CommonStateRoot {
  common: CommonState;
}
