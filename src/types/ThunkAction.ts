import { ThunkAction as ReduxThunkAction, ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import { AppAction } from '../store/types';

export type ThunkDispatch = ReduxThunkDispatch<RootState, never, AppAction>;

export type ThunkAction<R> = ReduxThunkAction<R, RootState, never, AppAction>;

export default ThunkAction;
