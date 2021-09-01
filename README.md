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

### Changelog

#### v1.0.0

Breaking changes:
- `derived` has been renamed to `select`
- `countValue.value` has been replaced with `countValue.v`

Other changes:
- Improved Typescript support: type is now being inferred from `useValue`