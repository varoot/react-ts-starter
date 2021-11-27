import { useCallback, useContext, useEffect } from 'react';
import { PromiseDialogContext } from '../contexts/PromiseDialogContext';
import {
  DialogComponentExtraPropKeys,
  DialogComponentExtraProps,
  DialogComponentResolveType,
  DialogComponentType,
} from '../typings';
import { useUniqueToken } from './useUniqueToken';

type PromiseDialogOpenFunc<C> = DialogComponentExtraPropKeys<C> extends never
  ? () => Promise<DialogComponentResolveType<C> | undefined>
  : (props: DialogComponentExtraProps<C>) => Promise<DialogComponentResolveType<C> | undefined>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function usePromiseDialog<C extends DialogComponentType<any, any>>(Component: C): PromiseDialogOpenFunc<C> {
  const parentToken = useUniqueToken('usePromiseDialog');
  const { closeAllPendingByParentToken, open } = useContext(PromiseDialogContext);

  useEffect(() => {
    // When component unmounts, reject all pending promises
    return () => {
      closeAllPendingByParentToken(parentToken);
    };
  }, [closeAllPendingByParentToken, parentToken]);

  const openWithComponent = useCallback(
    async (props) => open(parentToken, Component, props),
    [Component, open, parentToken],
  );

  return openWithComponent as unknown as PromiseDialogOpenFunc<C>;
}

export default usePromiseDialog;
