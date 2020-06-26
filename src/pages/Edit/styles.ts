import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
`;

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22;
  margin: 20;
  background-color: white;
  border-radius: 20;
  padding: 35;
  align-items: center;
  /* shadow-color: #000; */
  shadow-offset: {
    width: 0;
    height: 2;
  }
  /* shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5; */
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #56cad8;
  width: 100px;
  height: 40px;
  border-radius: 10px;
`;

export const Container = styled.View`
  flex: 1;
  /* justify-content: flex-start; */
  /* align-items: center; */
`;
export const TitleView = styled.View``;

export const Title = styled.TextInput`
  align-self: stretch;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 5px;
  border-bottom-width: 2px;
  border-color: #fd8369;
`;

export const Text = styled.TextInput`
  padding-top: 20px;
  padding-bottom: 50px;
  font-size: 18px;
  /* background-color: red; */
`;

export const Save = styled.TouchableOpacity`
  /* background-color: */
  margin-right: 20px;
`;
