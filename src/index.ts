export interface Pipe<A> {
  to<B, Rest extends any[]>(
    fn: (value: A, ...args: Rest) => B,
    ...args: Rest
  ): Pipe<B>;

  out<B, Rest extends any[]>(
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
  out<B, Rest extends any[]>(
    fn: (value: A, ...args: Rest) => B,
    ...args: Rest
  ): B {
    return fn(value, ...args);
  }
});
