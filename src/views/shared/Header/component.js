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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        position: 'relative',
        zIndex: 1,
      }}
      centerContainerStyle={{
        alignSelf: 'center',
      }}
      statusBarProps={{
        backgroundColor: "white",
        barStyle: "dark-content",
      }}
      centerComponent={(
        <Text testID="headerTitle" style={{ fontSize: 18, fontWeight: 'bold' }}>
          {centerTitle}
        </Text>
      )}
      {...props}
    />
  );
};

HeaderComponent.propTypes = {
  centerTitle: PropTypes.string.isRequired,
};

export default HeaderComponent;
