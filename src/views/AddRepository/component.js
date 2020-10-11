import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Header from '../shared/Header';

const AddRepository = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header
        centerTitle="Add repository"
        leftComponent={(
          <Icon
            name="chevron-left"
            type="octicon"
            size={18}
            onPress={() => navigation.goBack()}
            containerStyle={{ padding: 15 }}
          />
        )}
      />

      <Text>
        AddRepository
      </Text>
    </>
  );
};

export default AddRepository;
