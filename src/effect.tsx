import { ValueWrapper } from './types';

export const effect = (values: ValueWrapper[], fn: () => void) => {
  values.forEach(v => {
    v.emitter.on('update', fn);
  });
}
