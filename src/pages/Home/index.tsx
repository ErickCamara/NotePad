import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Title, Footer, Button} from './styles';

import Notes from '../../components/Notes';

interface NoteProps {
  id: string;
  title: string;
  text: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [notes, setNotes] = useState<NoteProps[]>([]);

  useEffect(() => {
    async function loadStoragedData() {
      try {
        const dataStorage = await AsyncStorage.getItem('@note_info:data');
        const dataProcessed = JSON.parse(String(dataStorage));
        if (dataStorage) {
          setNotes(dataProcessed);
        }
      } catch (e) {
        console.log(e);
      }
    }
    navigation.addListener('focus', () => {
      loadStoragedData();
    });
  }, [navigation]);

  return (
    <>
      <Container>
        <Title>Anotações</Title>
        <FlatList
          style={{
            paddingHorizontal: 10,
            width: '100%',
          }}
          data={notes}
          numColumns={2}
          renderItem={({item}) => (
            <Notes id={String(item.id)} title={item.title} text={item.text} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
        <Footer>
          <Button onPress={() => navigation.navigate('Create')}>
            <FeatherIcon name="plus" size={30} color="#fff" />
          </Button>
        </Footer>
      </Container>
    </>
  );
};
export default Home;
