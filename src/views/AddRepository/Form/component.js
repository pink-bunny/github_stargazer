import React from 'react';
import { Button } from 'react-native-elements';

import { StyledView, StyledInput } from './styled';

const AddRepository = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <StyledView>
    <StyledInput
      placeholder="Type to search..."
      onChangeText={handleChange('name')}
      onBlur={handleBlur('name')}
      value={values.name}
    />
    <Button
      title="Add"
      type="outline"
      onPress={handleSubmit}
    />
  </StyledView>
);

export default AddRepository;
