import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';
import { Text } from 'react-native';

import Empty from './Empty';
import { startSearch as startSearchAction } from '../../state/concepts/search/actions';

// eslint-disable-next-line react/prefer-stateless-function
class HomeScreen extends Component {
  render() {
    const { startSearch } = this.props;

    return (
      <>
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

        <Empty />
      </>
    );
  }
}

HomeScreen.propTypes = {
  startSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  startSearch: startSearchAction,
};

export default connect(null, mapDispatchToProps)(HomeScreen);
