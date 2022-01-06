import styled from 'styled-components/native';

const ContentWrap = styled.ScrollView`
  padding: 20px 10px;
`;

const Title = styled.Text`
  font-weight: 700;
  margin-bottom: 16;
  font-size: 48;
`;

const TextWrap = styled.View`
  margin-bottom: 48;
`;

const Text = styled.Text`
  margin-bottom: 12;
  font-size: 24;
`;

export {
  Title, Text, TextWrap, ContentWrap,
};
