import { createLogic } from 'redux-logic';

import * as types from '../types';

const searchRepo = createLogic({
  type: types.START_SEARCH,

  process({ getState, action }, dispatch, done) {
    console.log('LOG: searchRepo', action);
  },
});

export default searchRepo;
