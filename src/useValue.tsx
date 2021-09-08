import { useEffect, useState } from 'react';
import { ValueWrapper } from './types';

export function useValue<Value = any>(value: ValueWrapper<Value>): Value {
  const { 1: setState } = useState({});
  useEffect(() => {
    const l = () => setState({});
    value.emitter.on('update', l);
    return () => {
      value.emitter.off('update', l);
    };
  }, []);
  return value.v;
}
