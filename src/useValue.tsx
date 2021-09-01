import { useEffect, useState } from 'react';
import { ValueWrapper } from './types';

export function useValue<Value = any>(value: ValueWrapper<Value>): Value {
  const { 1: setState } = useState(0);
  useEffect(() => {
    const l = () => setState(Date.now() + Math.random());
    value.emitter.on('update', l);
    return () => {
      value.emitter.off('update', l);
    };
  }, []);
  return value.v;
}
