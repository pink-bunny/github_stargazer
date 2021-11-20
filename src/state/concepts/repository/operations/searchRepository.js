import { createLogic } from 'redux-logic';
import { includes } from 'ramda';

import * as types from '../types';
import { searchRepositorySuccess, setSearchRequest } from '../actions';
import { searchRequestSelector } from '../selectors';

const searchRepository = createLogic({
  type: types.SEARCH_REPOSITORY,
  latest: true,

  async process({ action, httpClient, getState }, dispatch, done) {
    const { value, setSubmitting, setErrors, navigation } = action;

    const isAlreadySearch = includes(value, searchRequestSelector(getState()));

    try {
      if (isAlreadySearch) {
        setErrors({
          name: `"${value}" has already exists in list`,
        });
        setSubmitting(false);
      } else {
        const { data } = await httpClient.get(`/repos/${value}`);
        const repo = {
          id: data.id,
          fullData: data.full_name,
          stargazersCount: data.stargazers_count,
          watchersCount: data.watchers_count,
          forksCount: data.forks_count,
          owner: {
            url: data.owner.url,
            avatarUrl: data.owner.avatar_url,
            reposUrl: data.owner.repos_url,
          }
        };

        dispatch(setSearchRequest(value));
        dispatch(searchRepositorySuccess(repo));
        setSubmitting(false);
        navigation.goBack();
      }
    } catch (error) {
      setErrors({
        name: `We couldn’t find any repositories matching "${value}"`,
      });
      setSubmitting(false);
    }

    done();
  },
});

export default searchRepository;
