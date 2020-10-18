import { createLogic } from 'redux-logic';
import axios from 'axios';

import * as types from '../types';
import { searchRepositorySuccess } from '../actions';

const searchRepo = createLogic({
  type: types.SEARCH_REPOSITORY,
  latest: true,

  async process({ action }, dispatch, done) {
    const { value, setSubmitting, setErrors } = action;

    try {
      const { data } = await axios.get(`https://api.github.com/repos/${value}`);
      console.log('LOG: data', data);
      dispatch(searchRepositorySuccess(data));
    } catch (error) {
      setErrors({
        name: `We couldn’t find any repositories matching "${value}"`,
      });
    }

    setSubmitting(false);
    done();
  },
});

export default searchRepo;
