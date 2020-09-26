import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';

import { startSearch as startSearchAction } from '../../state/concepts/search/actions';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prefer-stateless-function
class HomeScreen extends Component {
  render() {
    const { startSearch } = this.props;

    return (
      <>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
        <Button
          title="Click me"
          onPress={startSearch}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  startSearch: startSearchAction,
};

export default connect(null, mapDispatchToProps)(HomeScreen);
