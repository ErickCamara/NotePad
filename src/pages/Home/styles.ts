import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* padding: 0 10px; */
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  top: 85%;
  right: 0;
  left: -20px;
  width: 100%;
  align-items: flex-end;
  /* background-color: red; */
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fd8369;
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
