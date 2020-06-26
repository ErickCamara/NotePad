import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Note, NoteTitle, NoteText} from './styles';

interface NoteProps {
  id: string;
  title: string;
  text: string;
}

const Home: React.FC<NoteProps> = ({id, title, text}) => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate('Edit', {
      id,
      title,
      text,
    });
  }, [navigation, id, text, title]);

  return (
    <Container>
      <Note onPress={handleNavigation}>
        <NoteTitle>{title}</NoteTitle>
        <NoteText>{text}</NoteText>
      </Note>
    </Container>
  );
};
export default Home;
