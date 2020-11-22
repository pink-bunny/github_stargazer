import { pipe, map, toPairs, sum } from 'ramda';

export default (data) => {
  const total = pipe(
    toPairs(),
    map((i) => i[1]),
    sum(),
  )(data);

  const res = pipe(
    toPairs(),
    map((i) => {
      const calcPercents = ((i[1] * 100) / total).toFixed(1);

      return [i[0], calcPercents];
    }),
  )(data);

  return res;
};
