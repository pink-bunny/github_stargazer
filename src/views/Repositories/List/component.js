import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styled';

const ListComponent = ({ repositories }) => {
  const navigation = useNavigation();

  return (
    <View>
      {repositories.map((item) => (
        <TouchableWithoutFeedback
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
      ))}
    </View>
  );
};

ListComponent.defaultProps = {
  repositories: null,
};

ListComponent.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()),
};

export default ListComponent;
