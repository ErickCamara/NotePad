import React, {useEffect, useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import faker from 'faker';

import {Container, Title, Text, Save} from './styles';

interface NoteProps {
  id: string;
  title: string;
  text: string;
}

const Create: React.FC = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState<NoteProps[]>([]);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedData = await AsyncStorage.getItem('@note_info:data');

      if (storagedData) {
        setData(JSON.parse(storagedData));
      }
    }
    loadStoragedData();
  }, []);

  const handleSaveNote = useCallback(() => {
    try {
      const formData: NoteProps[] = [
        ...data,
        {id: faker.random.uuid(), title: title, text: text},
      ];

      const jsonValue = JSON.stringify(formData);
      AsyncStorage.setItem('@note_info:data', jsonValue);

      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }, [data, navigation, text, title]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: null,
      headerTintColor: '#FD8369',
      headerStyle: {
        backgroundColor: '#ccf0f5',
      },
      headerRight: () => (
        <Save onPress={handleSaveNote}>
          <FeatherIcon name="save" size={25} color="#FD8369" />
        </Save>
      ),
    });
  }, [data, navigation, handleSaveNote]);

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
export default Create;
