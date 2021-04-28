import { FC } from 'react';
import { PromiseDialogContext } from './common/contexts/PromiseDialogContext';
import { usePromiseDialogProvider } from './common/hooks';

/**
 * PromiseDialogProvider renders dialogs and provides PromiseDialog context
 */
const PromiseDialogProvider: FC = ({ children }) => {
  const { contextValue, dialogs } = usePromiseDialogProvider();
  return (
    <PromiseDialogContext.Provider value={contextValue}>
      {children}
      {dialogs}
    </PromiseDialogContext.Provider>
  );
};

export default PromiseDialogProvider;
