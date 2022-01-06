import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Empty from '../Empty';
import * as S from './styled';

const ListComponent = ({ repositories }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }} testID="repositories">
      <FlatList
        data={repositories}
        keyExtractor={item => item.id}
        ListEmptyComponent={Empty}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            testID="repositoryItem"
            key={item.id}
            onPress={() => navigation.navigate('DetailedRepository', { fullData: item.fullData, id: item.id })}
          >
            <S.StyledItem>
              <Text>
                {item.fullData}
              </Text>
              <Text>
                {item.stargazersCount}
              </Text>
            </S.StyledItem>
          </TouchableWithoutFeedback>
        )}
      />
    </SafeAreaView>
  );
};

ListComponent.defaultProps = {
  repositories: null,
};

ListComponent.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()),
};

export default ListComponent;
