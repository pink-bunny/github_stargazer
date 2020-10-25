import { createLogic } from 'redux-logic';

import * as types from '../types';
import { searchRepositorySuccess } from '../actions';

const searchRepository = createLogic({
  type: types.SEARCH_REPOSITORY,
  latest: true,

  async process({ action, httpClient }, dispatch, done) {
    const { value, setSubmitting, setErrors, navigation } = action;

    try {
      const { data } = await httpClient.get(`/repos/${value}`);

      dispatch(searchRepositorySuccess(data));
      navigation.goBack();
    } catch (error) {
      setErrors({
        name: `We couldn’t find any repositories matching "${value}"`,
      });
    }

    setSubmitting(false);
    done();
  },
});

export default searchRepository;
