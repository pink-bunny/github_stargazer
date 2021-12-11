import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-native-elements';

import * as S from './styled';

const AddRepository = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <S.StyledView>
    <S.InputWrapper>
      <S.StyledInput
        placeholder="Type to search..."
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        isError={touched.name && errors.name}
      />
      {touched.name && errors.name ? (
        <S.StyledErrorMessage>
          <Icon
            name="alert"
            type="octicon"
            size={14}
            iconStyle={{ color: 'red', marginRight: 8 }}
          />
          <S.StyledErrorMessageText>
            {errors.name}
          </S.StyledErrorMessageText>
        </S.StyledErrorMessage>
      ) : null}
    </S.InputWrapper>
    <Button
      title="Add"
      type="outline"
      loading={isSubmitting}
      onPress={handleSubmit}
    />
  </S.StyledView>
);

AddRepository.propTypes = {
  values: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  errors: PropTypes.shape().isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default AddRepository;
