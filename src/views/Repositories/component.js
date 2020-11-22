import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Header from '../shared/Header';
import Empty from './Empty';
import List from './List';

const Repositories = ({ repositories }) => {
  const navigation = useNavigation();

  return (
    <>
      <Header
        centerTitle="Github Stargather"
        rightComponent={(
          <Icon
            name="plus"
            type="octicon"
            size={18}
            onPress={() => navigation.navigate('AddRepository')}
            containerStyle={{ padding: 15 }}
          />
        )}
      />

      {repositories.length > 0 ? <List repositories={repositories} /> : <Empty />}
    </>
  );
};

Repositories.defaultProps = {
  repositories: null,
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()),
};

export default Repositories;
