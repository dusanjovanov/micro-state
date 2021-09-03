import mitt from 'mitt';
import { ValueWrapper } from './types';

export function select<ReturnValue = any>(
  values: ValueWrapper<any>[],
  fn: () => ReturnValue
) {
  let _v = fn();
  const emitter = mitt();
  values.forEach(v => {
    v.emitter.on('update', () => {
      const oldValue = _v;
      _v = fn();
      if (oldValue !== _v) {
        emitter.emit('update', _v);
      }
    });
  });
  return {
    get v() {
      return _v;
    },
    emitter,
  };
}
