import * as React from 'react';
import { useValue } from '../../../dist';
import {
  countValue,
  selectDoubleCount,
  selectDoubleDoubleCount,
} from '../store/count';

export const Count = () => {
  const count = useValue(countValue);
  const doubleCount = useValue(selectDoubleCount);
  const doubleDoubleCount = useValue(selectDoubleDoubleCount);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Double count: {doubleCount}</div>
      <div>Double double count: {doubleDoubleCount}</div>
    </div>
  );
};
