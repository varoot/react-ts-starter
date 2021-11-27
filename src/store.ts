import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commonReducer } from './common/store/commonSlice';

export const rootReducer = combineReducers({
  common: commonReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;

export default store;
