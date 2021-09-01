import mitt from 'mitt';

export function value<Value = any>(v: Value) {
  let _v: Value = v;
  const emitter = mitt();
  return {
    get v() {
      return _v;
    },
    set v(v: Value) {
      _v = v;
      emitter.emit('update', v);
    },
    emitter,
  };
}
