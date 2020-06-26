import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  /* background-color: red; */
`;

export const Image = styled.Image``;
export const Body = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  margin-left: 10px;
  font-size: 16px;
  color: #1c1c1c;
`;
export const Footer = styled.View`
  margin-top: 50px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #56cad8;
  width: 100px;
  height: 40px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
