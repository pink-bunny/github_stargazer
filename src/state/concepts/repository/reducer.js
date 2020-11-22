import { combineReducers } from 'redux';

import * as types from './types';

const list = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_REPOSITORY_SUCCESS:
      return {
        ...state,
        [action.repository.id]: { ...action.repository },
      };
    case types.FETCH_REPOSITORY_LANG_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          languages: {
            ...action.languages,
          },
        },
      };
    default:
      return state;
  }
};

const searchRequest = (state = [], action) => {
  switch (action.type) {
    case types.SET_SEARCH_REQUEST:
      return [
        ...state,
        action.request,
      ];
    default:
      return state;
  }
};

export default combineReducers({
  list,
  searchRequest,
});
