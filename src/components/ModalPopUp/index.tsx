import React, {useState, useCallback} from 'react';
import {Alert, Modal, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {
  Save,
  Container,
  ModalView,
  ModalText,
  KeyboardView,
  Personal,
  PersonalText,
  Corporate,
  CorporateText,
} from './styles';

interface NoteProps {
  id: string;
  title: string;
  text: string;
}

interface ModalProps {
  data: NoteProps[];
  id: string;
}

const ModalPopUp: React.FC<ModalProps> = ({data, id, children}) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteNote = useCallback(() => {
    let dataToRemove = data;
    try {
      console.log('entrou no handleDeleteNote 2', data);
      dataToRemove.map((dataMap) => {
        console.log('entrou aqui', dataMap);
        if (dataMap.id === id) {
          console.log('entrou no handleDeleteNote');
          console.log(dataMap);
          dataToRemove.splice(Number(dataMap), 1);
        }
      });

      const jsonValue = JSON.stringify(dataToRemove);
      AsyncStorage.setItem('@note_info:data', jsonValue);

      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }, [data, id, navigation]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Container>
          <ModalView>
            <ModalText>Você realmente deseja excluir esta nota?</ModalText>

            <KeyboardView>
              <Personal
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <PersonalText> Cancelar </PersonalText>
              </Personal>

              <Corporate onPress={handleDeleteNote}>
                <CorporateText> Excluir </CorporateText>
              </Corporate>
            </KeyboardView>
          </ModalView>
        </Container>
      </Modal>

      <Save
        onPress={() => {
          setModalVisible(true);
        }}>
        {children}
      </Save>
    </View>
  );
};
export default ModalPopUp;
