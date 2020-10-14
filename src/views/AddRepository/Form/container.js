import React, { Component } from 'react';
import { withFormik } from 'formik';

import FormComponent from './component';

// eslint-disable-next-line react/prefer-stateless-function
class Form extends Component {
  render() {
    console.log('LOG: this.props', this.props);
    return (
      <FormComponent
        {...this.props}
      />
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({ name: '' }),

  validate: values => {
    const errors = {};
    console.log('LOG: errors', errors);
    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    console.log('LOG: handleSubmit');
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'AddRepositoryForm',
})(Form);
