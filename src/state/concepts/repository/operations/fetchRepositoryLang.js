import { createLogic } from 'redux-logic';

import * as types from '../types';
import { fetchRepositoryLangSuccess } from '../actions';

const fetchRepositoryLang = createLogic({
  type: types.FETCH_REPOSITORY_LANG,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { fullData, id } = action;

    try {
      const { data } = await httpClient.get(`/repos/${fullData}/languages`);

      dispatch(fetchRepositoryLangSuccess(data, id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Handle error', error);
    }

    done();
  },
});

export default fetchRepositoryLang;
