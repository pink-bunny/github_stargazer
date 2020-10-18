import { combineReducers } from 'redux';

import * as types from './types';

const repositories = (state = [], action) => {
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

const repositoriesReducer = combineReducers({
  repositories,
});

export default repositoriesReducer;
