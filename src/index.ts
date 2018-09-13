export interface Pipe<A> {
  to<B, Rest extends any[]>(
    fn: (value: A, ...args: Rest) => B,
    ...args: Rest
  ): Pipe<B>;

  end<B, Rest extends any[]>(
    fn: (value: A, ...args: Rest) => B,
    ...args: Rest
  ): B;
}

export const pipe = <A>(value: A): Pipe<A> => ({
  to<B, Rest extends any[]>(
    fn: (value: A, ...args: Rest) => B,
    ...args: Rest
  ): Pipe<B> {
    return pipe(fn(value, ...args));
  },
  end<B, Rest extends any[]>(
    fn: (value: A, ...args: Rest) => B,
    ...args: Rest
  ): B {
    return fn(value, ...args);
  }
});
