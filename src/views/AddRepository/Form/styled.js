import styled from 'styled-components/native';

const StyledView = styled.View`
  flex-grow: 1;
  padding: 20px;
`;
const InputWrapper = styled.View`
  margin-bottom: 16px;
`;
const StyledInput = styled.TextInput`
  border-radius: 3px;
  background-color: white;
  border-color: ${({ isError }) => isError ? 'red' : 'grey'};
  border-width: 1px;
  border-style: solid;
  min-height: 42px;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
`;
const StyledErrorMessage = styled.View`
  display: flex;
  flex-direction: row;
`;
const StyledErrorMessageText = styled.Text`
  color: red;
`;

export {
  StyledView,
  StyledInput,
  StyledErrorMessage,
  InputWrapper,
  StyledErrorMessageText,
};
