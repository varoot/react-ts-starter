import { useMemo } from 'react';
import getUniqueToken from '../utils/getUniqueToken';

export function useUniqueToken(description: string): string {
  const token = useMemo(() => getUniqueToken(description), [description]);
  return token;
}

export default useUniqueToken;
