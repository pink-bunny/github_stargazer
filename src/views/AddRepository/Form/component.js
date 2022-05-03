import React from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
  <KeyboardAwareScrollView>
    <S.StyledView>
      <S.InputWrapper>
        <S.StyledInput
          autoFocus
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

    </S.StyledView>
  </KeyboardAwareScrollView>
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
