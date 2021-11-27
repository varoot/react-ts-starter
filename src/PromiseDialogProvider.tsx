import { ReactNode } from 'react';
import { PromiseDialogContext } from './common/contexts/PromiseDialogContext';
import { usePromiseDialogProvider } from './common/hooks';

interface Props {
  children?: ReactNode;
}

/**
 * PromiseDialogProvider renders dialogs and provides PromiseDialog context
 */
function PromiseDialogProvider({ children }: Props): JSX.Element {
  const { contextValue, dialogs } = usePromiseDialogProvider();
  return (
    <PromiseDialogContext.Provider value={contextValue}>
      {children}
      {dialogs}
    </PromiseDialogContext.Provider>
  );
}

export default PromiseDialogProvider;
