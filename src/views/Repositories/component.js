import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Header from '../shared/Header';
import Empty from './Empty';

const Repositories = () => {
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

      <Empty />
    </>
  );
};

export default Repositories;
