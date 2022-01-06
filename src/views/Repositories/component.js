import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'react-native-elements';
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
          <Button
            testID="ctaAddRepository"
            onPress={() => navigation.navigate('AddRepository')}
            buttonStyle={{ padding: 12 }}
            icon={(
              <Icon
                name="plus"
                type="octicon"
                size={18}
              />
            )}
            type="clear"
          />
        )}
      />

      <List repositories={repositories} />
    </>
  );
};

Repositories.defaultProps = {
  repositories: [],
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()),
};

export default Repositories;
