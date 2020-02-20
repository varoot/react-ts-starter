class Counter {
  private counterValue: number;

  constructor(readonly initialValue = 0) {
    this.counterValue = initialValue;
  }

  reset(): this {
    this.counterValue = this.initialValue;
    return this;
  }

  next(): this {
    this.counterValue += 1;
    return this;
  }

  get value(): number {
    return this.counterValue;
  }
}

export default Counter;
