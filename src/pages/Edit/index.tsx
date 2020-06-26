import React, {useEffect, useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import {useRoute, useNavigation} from '@react-navigation/native';

import {Header, Container, Title, Text, Save} from './styles';

interface NoteProps {
  id: string;
  title: string;
  text: string;
}

const Edit: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState<NoteProps[]>([]);
  const routeParams = route.params as NoteProps;

  useEffect(() => {
    async function loadStoragedData() {
      try {
        const dataStorage = await AsyncStorage.getItem('@note_info:data');
        const dataProcessed = JSON.parse(String(dataStorage));
        if (dataStorage) {
          setData(dataProcessed);
        }
      } catch (e) {
        console.log(e);
      }
    }
    setTitle(routeParams.title);
    setText(routeParams.text);
    navigation.addListener('focus', () => {
      loadStoragedData();
    });
  }, [navigation, routeParams.text, routeParams.title]);

  const handleSaveNote = useCallback(() => {
    let processedData = data;
    try {
      console.log('entrou no SAVE 2', data);
      processedData.map((dataMap) => {
        console.log('DADO ANTES DE SER ALTERADO: ', dataMap);
        if (dataMap.id === routeParams.id) {
          dataMap.title = title;
          dataMap.text = text;
        }
      });
      console.log('DADO ALTERADO: ', processedData);
      setData(processedData);

      const jsonValue = JSON.stringify(data);
      AsyncStorage.setItem('@note_info:data', jsonValue);

      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }, [data, navigation, routeParams.id, text, title]);

  const handleDeleteNote = useCallback(() => {
    let dataToRemove = data;
    try {
      console.log('entrou no handleDeleteNote 2', data);
      dataToRemove.map((dataMap) => {
        console.log('entrou aqui', dataMap);
        if (dataMap.id === routeParams.id) {
          console.log('entrou no handleDeleteNote');
          console.log(dataMap);
          dataToRemove.splice(Number(dataMap), 1);
        }
      });
      setData(dataToRemove);

      const jsonValue = JSON.stringify(data);
      AsyncStorage.setItem('@note_info:data', jsonValue);

      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }, [data, navigation, routeParams.id]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: null,
      headerTintColor: '#FD8369',
      headerStyle: {
        backgroundColor: '#ccf0f5',
      },
      headerRight: () => (
        <Header>
          <Save onPress={handleSaveNote}>
            <FeatherIcon name="save" size={25} color="#FD8369" />
          </Save>
          <Save onPress={handleDeleteNote}>
            <FeatherIcon name="trash" size={25} color="#FD8369" />
          </Save>
        </Header>
      ),
    });
  }, [data, navigation, handleSaveNote, handleDeleteNote]);

  return (
    <Container>
      <ScrollView
        style={{flex: 1, width: '100%'}}
        contentContainerStyle={{height: '100%', paddingHorizontal: 10}}>
        <Title
          placeholder="Titulo"
          placeholderTextColor="#c1c1c1"
          value={title}
          // eslint-disable-next-line no-shadow
          onChangeText={(text) => setTitle(text)}
        />
        <Text
          multiline
          numberOfLines={100}
          textAlignVertical="top"
          value={text}
          // eslint-disable-next-line no-shadow
          onChangeText={(text) => setText(text)}
        />
      </ScrollView>
    </Container>
  );
};
export default Edit;
