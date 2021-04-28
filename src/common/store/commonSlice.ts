import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  spinnerTokens: Record<string, boolean>;
}

const initialState: CommonState = { spinnerTokens: {} };

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    spinnerStart(state, action: PayloadAction<string>) {
      state.spinnerTokens[action.payload] = true;
    },
    spinnerStop(state, action: PayloadAction<string>) {
      delete state.spinnerTokens[action.payload];
    },
  },
});

export const commonActions = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
