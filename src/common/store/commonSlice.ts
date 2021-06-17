import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonState } from '../typings';

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
