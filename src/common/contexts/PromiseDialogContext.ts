import { createContext } from 'react';
import { DialogComponentExtraProps, DialogComponentResolveType, DialogComponentType } from '../typings';

export interface PromiseDialogContextValue {
  closeAllPendingByParentToken: (parentToken: string) => void;
  open<T>(parentToken: string, Component: DialogComponentType<T, void>): Promise<T | undefined>;
  open<C>(
    parentToken: string,
    Component: C,
    props: DialogComponentExtraProps<C>,
  ): Promise<DialogComponentResolveType<C> | undefined>;
  open<C extends DialogComponentType<unknown, unknown>>(
    parentToken: string,
    Component: C,
    props?: DialogComponentExtraProps<C>,
  ): Promise<DialogComponentResolveType<C> | undefined>;
}

export const PromiseDialogContext = createContext<PromiseDialogContextValue>({
  closeAllPendingByParentToken() {
    // TODO
  },
  async open() {
    // TODO
    return null;
  },
});
