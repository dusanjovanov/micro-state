import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { effect, select, useValue, value } from '../.';

const countValue = value(1);

effect([countValue], () => console.log(countValue.v));

const doubleCountValue = select([countValue], () => countValue.v * 2);

const doubleDoubleCountValue = select(
  [doubleCountValue],
  () => doubleCountValue.v * 2
);

const plus = () => {
  countValue.v++;
};

const minus = () => {
  countValue.v--;
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
  const count = useValue(countValue);
  const doubleCount = useValue(doubleCountValue);
  const doubleDoubleCount = useValue(doubleDoubleCountValue);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Double count: {doubleCount}</div>
      <div>Double double count: {doubleDoubleCount}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
