import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commonReducer } from './common/store/commonSlice';
import { ticTacToeReducer } from './game/store/ticTacToeSlice';

export const rootReducer = combineReducers({
  common: commonReducer,
  ticTacToe: ticTacToeReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;

export default store;
