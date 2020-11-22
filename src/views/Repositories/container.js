import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { repositoriesSelector } from '../../state/concepts/repository/selectors';
import RepositoriesComponent from './component';

// eslint-disable-next-line react/prefer-stateless-function
class ListContainer extends Component {
  render() {
    const { repositories } = this.props;

    return <RepositoriesComponent repositories={repositories} />;
  }
}

ListContainer.defaultProps = {
  repositories: null,
};

ListContainer.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()),
};

const mapStateToProps = (state) => ({
  repositories: repositoriesSelector(state),
});

export default connect(mapStateToProps)(ListContainer);
