import { select, value, effect } from '../../../dist';

export const countValue = value(1);

effect([countValue], () => console.log(countValue.v));

export const selectDoubleCount = select([countValue], () => countValue.v * 2);

export const selectDoubleDoubleCount = select(
  [selectDoubleCount],
  () => selectDoubleCount.v * 2
);

export const plus = () => {
  countValue.v++;
};

export const minus = () => {
  countValue.v--;
};