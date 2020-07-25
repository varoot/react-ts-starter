import { MutableRefObject, useCallback, useRef } from 'react';

type UseRefFocusResult<T> = [MutableRefObject<T | null>, () => void];

function useRefFocus<T extends HTMLElement>(): UseRefFocusResult<T> {
  const ref = useRef<T>(null);
  const focusRef = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return [ref, focusRef];
}

export default useRefFocus;
