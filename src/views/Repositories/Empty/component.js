import React from 'react';
import { Text, Image } from 'react-native';

import * as S from './styled';

const EmptyComponent = () => (
  <S.EmptyWrap testID="emptyView">
    <Image
      source={require('../../../assets/octocat.png')}
      style={{ width: 188, height: 188 }}
    />

    <Text testID="emptyViewText" style={{ fontStyle: 'italic' }}>
      No repositories added
    </Text>
  </S.EmptyWrap>
);

export default EmptyComponent;
