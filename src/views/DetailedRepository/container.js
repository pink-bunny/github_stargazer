import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchRepositoryLang as fetchRepositoryLangActions,
} from '../../state/concepts/repository/actions';
import { repositorySelector } from '../../state/concepts/repository/selectors';
import RepositoryComponent from './component';

class Repository extends Component {
  componentDidMount() {
    const { fetchRepositoryLang, route: { params: { fullData, id } } } = this.props;

    fetchRepositoryLang(fullData, id);
  }

  render() {
    const { repository } = this.props;

    return <RepositoryComponent {...repository} />;
  }
}

Repository.defaultProps = {
  repository: null,
};

Repository.propTypes = {
  fetchRepositoryLang: PropTypes.func.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      fullData: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  repository: PropTypes.shape(),
};

const mapStateToProps = (state, { route: { params: { id } } }) => ({
  repository: repositorySelector(state, id),
});

const mapDispatchToProps = {
  fetchRepositoryLang: fetchRepositoryLangActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
