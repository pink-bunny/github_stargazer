import { combineReducers } from 'redux';

import * as types from './types';

const startSearch = (state = null, action) => {
  switch (action.type) {
    case types.START_SEARCH:
      return 'HELLO START_SEARCH';
    default:
      return state;
  }
};

const sessionReducer = combineReducers({
  startSearch,
});

export default sessionReducer;
