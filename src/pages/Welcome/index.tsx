import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Image,
  Body,
  Title,
  SubTitle,
  Footer,
  Button,
  ButtonText,
} from './styles';

import Logo from '../../assets/welcome.png';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={Logo} />
      <Body>
        <Title>Crie suas notas e organize suas atividades -Teste Update</Title>
        <SubTitle>
          Layout simples com o intuito de agilizar suas anotações antes que você
          possa esquecer delas!
        </SubTitle>
      </Body>

      <Footer>
        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>Começar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};
export default Welcome;
