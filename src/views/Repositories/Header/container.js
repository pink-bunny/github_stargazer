import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './component';
import { startSearch as startSearchAction } from '../../../state/concepts/search/actions';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderContainer extends Component {
  render() {
    const { startSearch } = this.props;

    return (
      <Header
        startSearch={startSearch}
      />
    );
  }
}

HeaderContainer.propTypes = {
  startSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  startSearch: startSearchAction,
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
