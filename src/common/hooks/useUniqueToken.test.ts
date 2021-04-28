import { renderHook } from '@testing-library/react-hooks';
import { useUniqueToken } from './useUniqueToken';

describe('useUniqueToken', () => {
  it('should return a string with the prefix', () => {
    const { result } = renderHook(() => useUniqueToken('test-token'));
    expect(result.current).toMatch(/^test-token/);
  });

  it('should not change value after rerender', () => {
    const { result, rerender } = renderHook(() => useUniqueToken('test-token'));
    const value = result.current;

    rerender();
    expect(result.current).toBe(value);
  });

  it('should return unique values', () => {
    const { result: first } = renderHook(() => useUniqueToken('test-token'));
    const { result: second } = renderHook(() => useUniqueToken('test-token'));

    expect(first.current).not.toBe(second.current);
  });

  it('should update value if description changes', () => {
    interface Props {
      id: string;
    }

    const { result, rerender } = renderHook(({ id }: Props) => useUniqueToken(id), { initialProps: { id: 'first' } });
    const value = result.current;

    rerender({ id: 'second' });
    expect(value).not.toBe(result.current);
  });
});
