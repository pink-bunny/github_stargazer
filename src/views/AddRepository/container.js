import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddRepositoryComponent from './component';
import { startSearch as startSearchAction } from '../../state/concepts/search/actions';

// eslint-disable-next-line react/prefer-stateless-function
class AddRepository extends Component {
  render() {
    const { startSearch } = this.props;

    return (
      <AddRepositoryComponent
        startSearch={startSearch}
      />
    );
  }
}

AddRepository.propTypes = {
  startSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  startSearch: startSearchAction,
};

export default connect(null, mapDispatchToProps)(AddRepository);
