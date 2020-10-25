import { combineReducers } from 'redux';

import * as types from './types';

const list = (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_REPOSITORY_SUCCESS:
      return [
        ...state,
        action.repository,
      ];
    default:
      return state;
  }
};

export default combineReducers({
  list,
});
