import * as React from 'react';
import { useValue } from '../../../dist';
import { countValue, minus, plus } from '../store/count';

export const CounterControls = () => {
  const count = useValue(countValue);

  return (
    <div>
      <button onClick={minus}>-</button>
      {count} <button onClick={plus}>+</button>
    </div>
  );
};
