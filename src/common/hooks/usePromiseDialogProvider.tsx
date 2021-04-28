import { useCallback, useMemo, useRef, useState } from 'react';
import { PromiseDialogContextValue } from '../contexts/PromiseDialogContext';
import {
  DialogComponentExtraProps,
  DialogComponentProps,
  DialogComponentResolveType,
  DialogComponentType,
  DialogResolveFunc,
} from '../typings';

interface DialogInfo<T, P> extends DialogComponentProps<T> {
  Component: DialogComponentType<T, P>;
  key: number;
  parentToken: string;
  props: P;
  resolve: DialogResolveFunc<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyDialogInfo = DialogInfo<any, any>;

interface PromiseDialogProviderResult {
  contextValue: PromiseDialogContextValue;
  dialogs: JSX.Element[];
}

export function usePromiseDialogProvider(): PromiseDialogProviderResult {
  const [, rerender] = useState({});

  const dialogInfoList = useRef<AnyDialogInfo[]>([]);
  const keyCounter = useRef(0);

  const closeAllPendingByParentToken = useCallback((parentToken: string) => {
    let shouldRerender = false;
    for (const dialogInfo of dialogInfoList.current) {
      if (dialogInfo.parentToken === parentToken && dialogInfo.open) {
        dialogInfo.resolve();
        dialogInfo.open = false;
        shouldRerender = true;
      }
    }
    if (shouldRerender) {
      rerender({});
    }
  }, []);

  const remove = useCallback((dialogInfo) => {
    const index = dialogInfoList.current.indexOf(dialogInfo);
    if (index > -1) {
      dialogInfoList.current.splice(index, 1);
      rerender({});
    }
  }, []);

  const open = useCallback(
    async <C extends DialogComponentType<unknown, unknown>>(
      parentToken: string,
      Component: C,
      dialogProps?: DialogComponentExtraProps<C>,
    ) => {
      keyCounter.current += 1;
      const key = keyCounter.current;

      return new Promise<DialogComponentResolveType<C> | undefined>((resolve) => {
        const dialogInfo: AnyDialogInfo = {
          Component,
          key,
          parentToken,
          resolve,
          onClose: () => {
            // to define later
          },
          onExited: () => {
            // to define later
          },
          onResolve: () => {
            // to define later
          },
          open: true,
          props: dialogProps,
        };

        dialogInfo.onResolve = (
          value?: DialogComponentResolveType<C> | PromiseLike<DialogComponentResolveType<C>> | undefined,
        ) => {
          resolve(value);
          dialogInfo.open = false;
          rerender({});
        };

        dialogInfo.onClose = () => dialogInfo.onResolve();
        dialogInfo.onExited = () => remove(dialogInfo);

        dialogInfoList.current.push(dialogInfo);

        rerender({});
      });
    },
    [remove],
  );

  const contextValue = useMemo(() => ({ open, closeAllPendingByParentToken }), [open, closeAllPendingByParentToken]);

  const dialogs = dialogInfoList.current.map(
    ({ key, Component, parentToken, resolve, props: dialogProps, ...otherProps }) => (
      <Component key={key} {...dialogProps} {...otherProps} />
    ),
  );

  return { contextValue, dialogs };
}

export default usePromiseDialogProvider;
