import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Header from '../shared/Header';
import Form from './Form';

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

      <Form navigation={navigation} />
    </>
  );
};

export default AddRepository;
