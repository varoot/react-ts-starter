import { ReactNode, useCallback, useRef } from 'react';
import { PromiseDialogContext } from './common/contexts/PromiseDialogContext';
import { RouteChangeDialogContext, RouteChangeDialogOptionsAny } from './common/contexts/RouteChangeDialogContext';
import NavigateAwayDialog from './common/dialogs/NavigateAwayDialog';
import { usePromiseDialogProvider } from './common/hooks';
import CoreProvider from './CoreProvider';

interface Props {
  children?: ReactNode;
}

/**
 * AppProvider is application top-level provider. It renders CoreProvider.
 */
function AppProvider(props: Props): JSX.Element {
  const { children } = props;
  const { contextValue, dialogs } = usePromiseDialogProvider();
  const { open } = contextValue;

  // Note: Router does not allow updating getUserConfirmation so we store the options in this ref
  const routeChangeDialogOptions = useRef<RouteChangeDialogOptionsAny | undefined>();

  const getUserConfirmation = useCallback(
    async (message: string, callback: (ok: boolean) => void) => {
      const options: RouteChangeDialogOptionsAny = routeChangeDialogOptions.current || {
        Component: NavigateAwayDialog,
        props: { message },
      };

      try {
        const ok = await open('AppProvider.getUserConfirmation', options.Component, options.props);
        callback(!!ok);
      } catch (error) {
        callback(false);
      }
    },
    [open],
  );

  return (
    <RouteChangeDialogContext.Provider value={routeChangeDialogOptions}>
      <CoreProvider getUserConfirmation={getUserConfirmation}>
        <PromiseDialogContext.Provider value={contextValue}>
          {children}
          {dialogs}
        </PromiseDialogContext.Provider>
      </CoreProvider>
    </RouteChangeDialogContext.Provider>
  );
}

export default AppProvider;
