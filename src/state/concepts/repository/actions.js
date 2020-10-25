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
