import { useContext, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import { RouteChangeDialogContext, RouteChangeDialogOptions } from '../contexts/RouteChangeDialogContext';

type PromptType = typeof Prompt;

export function useRouteChangeDialog<P>(options?: RouteChangeDialogOptions<P>): PromptType {
  const context = useContext(RouteChangeDialogContext);
  context.current = options;

  // Clear options when unmounted
  useEffect(() => {
    return () => {
      context.current = undefined;
    };
  }, [context]);

  return Prompt;
}

export default useRouteChangeDialog;
