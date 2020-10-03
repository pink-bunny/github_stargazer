import React from 'react';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native';

import * as S from './styled';

const EmptyComponent = () => (
  <S.EmptyWrap>
    <Icon
      name="octoface"
      type="octicon"
      size={28}
      iconStyle={{ marginBottom: 16 }}
    />
    <Text>
      No repositories added
    </Text>
  </S.EmptyWrap>
);

export default EmptyComponent;
