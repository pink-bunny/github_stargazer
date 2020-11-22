import { createSelector } from 'reselect';
import {
  pipe, toPairs, map, path, sort,
} from 'ramda';

export const dataSelector = path(['repositories', 'list']);

export const searchRequestSelector = path(['repositories', 'searchRequest']);

export const repositoriesSelector = createSelector(
  dataSelector,
  (list) => (
    pipe(
      toPairs(),
      map((i) => i[1]),
      sort((a, b) => a.id - b.id),
    )(list)
  ),
);

export const repositorySelector = createSelector(
  dataSelector,
  (_, id) => id,
  (list, id) => list[id],
);
