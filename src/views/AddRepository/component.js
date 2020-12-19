import React from 'react';
import { Icon, Button } from 'react-native-elements';
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
          <Button
            onPress={() => navigation.goBack()}
            buttonStyle={{ padding: 12 }}
            icon={(
              <Icon
                name="chevron-left"
                type="octicon"
                size={18}
              />
            )}
            type="clear"
          />
        )}
      />

      <Form navigation={navigation} />
    </>
  );
};

export default AddRepository;
