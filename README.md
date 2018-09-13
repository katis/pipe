# Pipe

```
yarn add @katis/pipe
```

```
npm install @katis/pipe
```

TypeScript library for transforming values in the style of the Elm and F# pipe-operator.

## Docs

### `pipe(value)`

Create a pipeline that can be used to transform the provided value.

### `.to(fn, ...args)`

Provide a function for the pipeline that transforms the value.
The function is called with the value as the first parameter, and with the optional
extra arguments as rest of the parameters.

Returns a new pipeline where the result is the return value of the function.

### `.end(fn, ...args)`

Like `.to()` it takes a function that transforms the value, but just returns the transformed
value, ending the pipeline.

## Example

```ts
import { pipe } from "@katis/pipe";

const removePrefix = (str: string, prefix: string): string =>
  str.startsWith(prefix) ? str.slice(prefix.length) : str;

const result = pipe("Value: 1300")
  .to(removePrefix, "Value: ")
  .end(parseInt);
```
