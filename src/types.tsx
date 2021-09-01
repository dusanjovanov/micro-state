import { Emitter } from 'mitt';

export type ValueWrapper<Value = any> = {
  v: Value;
  emitter: Emitter;
};
