# Pipe

```
yarn add @katis/pipe
```

```
npm install @katis/pipe
```

TypeScript library for transforming values in the style of the Elm and F# pipe-operator.

## Motivation

Transforming values by chaining multiple function calls can make the code harder to read:

```ts
const removePrefix = (str: string, prefix: string): string =>
  str.startsWith(prefix) ? str.slice(prefix.length) : str;

const replace = (str: string, search: string, replaceWith: string) =>
  str.replace(search, replaceWith);

parseInt(replace(removePrefix("Value: 1300$", "Value: "), "$" ""), 10);
```

Pipe makes those calls sequential:

```ts
import { pipe } from '@katis/pipe'

const result = pipe('Value: 1300$')
  .to(removePrefix, 'Value: ')
  .to(replace, '$', '')
  .out(parseInt, 10)
```

## API

### `pipe(value)`

Create a pipeline that can be used to transform the provided value.

### `.to(fn, ...fnExtraArgs)`

Provide a function for the pipeline that transforms the value.
The function is called with the value as the first parameter, and with the optional
extra arguments as rest of the parameters.

Returns a new pipeline where the result is the return value of the function.

### `.out(fn, ...fnExtraArgs)`

Like `.to()` it takes a function that transforms the value, but just returns the transformed
value, ending the pipeline.
