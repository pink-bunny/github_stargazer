import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import * as S from './styled';
import toPercent from '../../utils/toPercent';
import Header from '../shared/Header';

const Repository = ({
  fullData,
  stargazersCount,
  watchersCount,
  forksCount,
  languages,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <Header
        centerTitle={fullData}
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

      <S.ContentWrap>
        <S.Title>Stats</S.Title>
        <S.TextWrap>
          <S.Text>{`Watchers: ${stargazersCount}`}</S.Text>
          <S.Text>{`Stars: ${watchersCount}`}</S.Text>
          <S.Text>{`Forks: ${forksCount}`}</S.Text>
        </S.TextWrap>

        <S.Title>Languages</S.Title>
        <S.TextWrap>
          {languages && toPercent(languages).map((item) => <S.Text key={item[0]}>{`${item[0]}: ${item[1]}%`}</S.Text>)}
        </S.TextWrap>
      </S.ContentWrap>
    </>
  );
};

Repository.defaultProps = {
  languages: null,
};

Repository.propTypes = {
  fullData: PropTypes.string.isRequired,
  stargazersCount: PropTypes.number.isRequired,
  watchersCount: PropTypes.number.isRequired,
  forksCount: PropTypes.number.isRequired,
  languages: PropTypes.shape(),
};

export default Repository;