import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View.attrs({
  textShadowColor: '#000',
  textShadowOffset: {width: 0, height: 2},
  elevation: 5,
})`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  height: 160px;
  align-items: center;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Save = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const KeyboardView = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55px;
  flex-direction: row;
`;
export const Personal = styled.TouchableOpacity`
  border-right-width: 1px;
  border-top-width: 2px;
  border-bottom-left-radius: 20px;
  border-color: #fd8369;
  justify-content: center;
  width: 50%;
`;
export const PersonalText = styled.Text`
  color: #fd8369;
  font-size: 16px;
  text-align: center;
`;

export const Corporate = styled.TouchableOpacity`
  background-color: #fd8369;
  border-left-width: 1px;
  border-top-width: 2px;
  border-bottom-right-radius: 20px;
  border-color: #fd8369;
  justify-content: center;
  width: 50%;
`;
export const CorporateText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
