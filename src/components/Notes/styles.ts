import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const Note = styled.TouchableOpacity`
  width: 180px;
  height: 195px;
  border-radius: 20px;
  background-color: #a7cbd8;
  padding-bottom: 20px;
  margin-right: 10px;
`;

export const NoteTitle = styled.Text`
  padding: 10px 15px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  /* padding-left: 10px; */
`;

export const NoteText = styled.Text`
  padding: 0 15px;
  font-size: 13px;
  justify-content: flex-start;
  max-height: 110px;
`;
