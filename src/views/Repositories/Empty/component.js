import React from 'react';
import { Text, Image, Platform } from 'react-native';

import * as S from './styled';

const EmptyComponent = () => (
  <S.EmptyWrap testID="emptyView">
    <Image
      source={require('../../../assets/octocat.png')}
      style={{ width: 188, height: 188 }}
    />

    <Text testID="emptyViewText" style={{ fontStyle: 'italic', marginBottom: 5, fontWeight: 'bold' }}>
      {Platform.select({
        ios: 'Hello ios!',
        android: 'Hi android!',
        default: 'Yello stranger!',
      })}
    </Text>
    <Text testID="emptyViewText" style={{ fontStyle: 'italic' }}>
      Sorry, but there are no repositories
    </Text>
  </S.EmptyWrap>
);

export default EmptyComponent;
