import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'react-native-elements';
import { Text } from 'react-native';

const HeaderComponent = (props) => {
  const { centerTitle } = props;

  return (
    <Header
      containerStyle={{
        backgroundColor: 'white',
        paddingHorizontal: 10,
      }}
      centerComponent={<Text>{centerTitle}</Text>}
      {...props}
    />
  );
};

HeaderComponent.propTypes = {
  centerTitle: PropTypes.string.isRequired,
};

export default HeaderComponent;
