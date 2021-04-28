import { createContext, MutableRefObject } from 'react';
import { DialogComponentType } from '../typings';

export interface RouteChangeDialogOptions<P> {
  Component: DialogComponentType<boolean, P>;
  props?: P;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RouteChangeDialogOptionsAny = RouteChangeDialogOptions<any>;

export type RouteChangeDialogContextValue = MutableRefObject<RouteChangeDialogOptionsAny | undefined>;

export const RouteChangeDialogContext = createContext<RouteChangeDialogContextValue>({ current: undefined });
