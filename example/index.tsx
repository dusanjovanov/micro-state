import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { derived, effect, useValue, value } from '../.';

const countValue = value(1);

effect([countValue], () => console.log(countValue.value));

const doubleCountValue = derived([countValue], () => countValue.value * 2);

const doubleDoubleCountValue = derived(
  [doubleCountValue],
  () => doubleCountValue.value * 2
);

const plus = () => {
  countValue.value++;
};

const minus = () => {
  countValue.value--;
};

const App = () => {
  return (
    <div>
      <Controls />
      <Counter />
    </div>
  );
};

const Controls = () => {
  const count = useValue(countValue);

  return (
    <div>
      <button onClick={minus}>-</button>
      {count} <button onClick={plus}>+</button>
    </div>
  );
};

const Counter = () => {
  const count = useValue<number>(countValue);
  const doubleCount = useValue<number>(doubleCountValue);
  const doubleDoubleCount = useValue<number>(doubleDoubleCountValue);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Double count: {doubleCount}</div>
      <div>Double double count: {doubleDoubleCount}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
