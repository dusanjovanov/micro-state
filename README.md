# Hali

![hali](https://github.com/dusanjovanov/hali/blob/master/logo.png 'hali')

Tiny global state management for React ⚛️

[![npm](https://badge.fury.io/js/hali.svg)](https://www.npmjs.com/package/hali)
![packagesize](https://badgen.net/bundlephobia/minzip/hali)
![treeshaking](https://badgen.net/bundlephobia/tree-shaking/hali)

### Install

```bash
npm install hali --save
```

### Usage

```tsx
import { value, select, effect, useValue } from 'hali';

const countValue = value(1);

effect([countValue], () => console.log(countValue.v));

const doubleCountValue = select([countValue], () => countValue.v * 2);

const plus = () => {
  countValue.v++;
};

const minus = () => {
  countValue.v--;
};

const App = () => {
  const count = useValue(countValue);
  const doubleCount = useValue(doubleCountValue);
  return (
    <div>
      <div>
        <button onClick={plus}>+</button>
        Count: {count}
        <button onClick={minus}>-</button>
      </div>
      Double count: {doubleCount}
    </div>
  );
};
```

### Full example (Counter and Todo)

[Demo](https://codesandbox.io/s/hali-example-mtcc7)<br/>
[Source code](https://github.com/dusanjovanov/hali/tree/master/example)

### Notes

- If your value is an object (or array), you always return a new object 
```tsx
  const objValue = value({ a: 1, b: 2 });

  // THIS
  objValue.v = { ...objValue.v, c: 3 }

  // NOT THIS (this will work, but will not trigger an update)
  objValue.v.c = 3
```

### Changelog

#### v1.0.0

Breaking changes:
- `derived` has been renamed to `select`
- `countValue.value` has been replaced with `countValue.v`

Other changes:
- Improved Typescript support: type is now being inferred from `useValue`