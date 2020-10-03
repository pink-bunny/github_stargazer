import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'react-native-elements';
import { Text } from 'react-native';

const HeaderComponent = ({ startSearch }) => (
  <Header
    containerStyle={{
      backgroundColor: 'white',
      paddingHorizontal: 20,
    }}
    rightComponent={(
      <Icon
        name="plus"
        type="octicon"
        size={18}
        onPress={startSearch}
      />
    )}
    centerComponent={<Text>Github Stargather</Text>}
  />
);

HeaderComponent.propTypes = {
  startSearch: PropTypes.func.isRequired,
};

export default HeaderComponent;
