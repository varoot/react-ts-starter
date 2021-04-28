import { renderHook } from '@testing-library/react-hooks';
import { useRefFocus } from './useRefFocus';

describe('useRefFocus', () => {
  it('should return ref and setFocus function', () => {
    const { result } = renderHook(() => useRefFocus());
    const [ref, focusRef] = result.current;
    expect(typeof ref).toBe('object');
    expect(focusRef).toBeInstanceOf(Function);
  });

  it('should call focus method on the ref element when focusRef is called', () => {
    const { result } = renderHook(() => useRefFocus());
    const [ref, focusRef] = result.current;
    const element: any = { focus: jest.fn().mockName('focus') };
    ref.current = element;
    focusRef();
    expect(element.focus).toBeCalled();
  });

  it('should do nothing if ref element is not set', () => {
    const { result } = renderHook(() => useRefFocus());
    const [, focusRef] = result.current;
    expect(() => focusRef()).not.toThrow();
  });
});
