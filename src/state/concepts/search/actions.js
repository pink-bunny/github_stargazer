import * as types from './types';

export const searchRepository = ({ value, setSubmitting, setErrors }) => ({
  type: types.SEARCH_REPOSITORY,
  value,
  setSubmitting,
  setErrors,
});

export const searchRepositorySuccess = (repository) => ({
  type: types.SEARCH_REPOSITORY_SUCCESS,
  repository,
});
