import styled from 'styled-components/native';

const StyledView = styled.View`
  flex-grow: 1;
  paddingHorizontal: 20;
  paddingVertical: 20;
`;

const StyledInput = styled.TextInput`
  border-radius: 3;
  background-color: white;
  border-color: grey;
  border-width: 1;
  border-style: solid;
  min-height: 42;
  margin-bottom: 24;
  paddingHorizontal: 8;
`;

export { StyledView, StyledInput };
