import mitt from 'mitt';

export function value<Value = any>(v: Value) {
  let _v: Value = v;
  const emitter = mitt();
  return {
    get v() {
      return _v;
    },
    set v(v: Value) {
      const oldValue = _v
      _v = v;
      if(oldValue !== _v) {
        emitter.emit('update', _v);
      } 
    },
    emitter,
  };
}
