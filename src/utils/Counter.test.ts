import Counter from './Counter';

describe('Counter', () => {
  it('should set initial value to zero', () => {
    const counter = new Counter();
    expect(counter.initialValue).toBe(0);
    expect(counter.value).toBe(0);
  });

  it('should allow setting different initial value', () => {
    const counter = new Counter(1000);
    expect(counter.initialValue).toBe(1000);
    expect(counter.value).toBe(1000);
  });

  describe('.next()', () => {
    it('should generate next value and return itself', () => {
      const counter = new Counter();
      const sameCounter = counter.next();
      expect(counter.value).toBe(1);
      expect(sameCounter).toBe(counter);
    });
  });

  describe('.reset()', () => {
    it('should reset to initial value', () => {
      const counter = new Counter(10);
      counter.next().next().next();
      expect(counter.value).toBe(13);
      const sameCounter = counter.reset();
      expect(counter.value).toBe(10);
      expect(sameCounter).toBe(counter);
    });
  });
});
