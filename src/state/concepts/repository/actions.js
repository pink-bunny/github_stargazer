import * as types from './types';

export const searchRepository = ({ value, setSubmitting, setErrors, navigation }) => ({
  type: types.SEARCH_REPOSITORY,
  value,
  setSubmitting,
  setErrors,
  navigation,
});

export const searchRepositorySuccess = (repository) => ({
  type: types.SEARCH_REPOSITORY_SUCCESS,
  repository,
});

export const fetchRepositoryLang = (fullData, id) => ({
  type: types.FETCH_REPOSITORY_LANG,
  fullData,
  id,
});

export const fetchRepositoryLangSuccess = (languages, id) => ({
  type: types.FETCH_REPOSITORY_LANG_SUCCESS,
  languages,
  id,
});

export const setSearchRequest = (request) => ({
  type: types.SET_SEARCH_REQUEST,
  request,
});
