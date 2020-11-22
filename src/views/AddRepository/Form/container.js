import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import FormComponent from './component';
import { searchRepository as searchRepositoryAction } from '../../../state/concepts/repository/actions';

const mapDispatchToProps = {
  searchRepository: searchRepositoryAction,
};

export default compose(
  connect(null, mapDispatchToProps),
  withFormik({
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required'),
    }),
    mapPropsToValues: () => ({ name: 'kenwheeler/slick' }),
    handleSubmit: (values, {
      props: { searchRepository, navigation },
      setSubmitting,
      setErrors,
    }) => {
      const value = values.name;
      searchRepository({ value, setSubmitting, setErrors, navigation });
    },
    displayName: 'AddRepositoryForm',
  }),
)(FormComponent);
