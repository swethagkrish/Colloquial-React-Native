import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { firestore } from '../components/Firebase/method';
import { IconButton, Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import UserAuthContext from '../navigation/UserAuthProvider';

export default function Chatroom({ navigation }) {
    const [room, setRoom] = useState('');
    const { user, setUser } = useContext(UserAuthContext);
    function createChatRoom() {
        if (room.length > 0) {
            firestore.collection('users')
                    .doc(user.id)
                    .collection('chatroom')
                    .add({
                      room: room,
                      latestMessage: {
                        text: `You have joined the room ${room}.`,
                        createdAt: new Date().getTime()
                      }})
                    .then(() => {
                      navigation.navigate('Chat', {room: room, userID: user.id});
                    })
        }
    }

    return (
        <View style={styles.rootContainer}>
          <View style={styles.closeButtonContainer}>
            <IconButton
              icon='close-circle'
              size={36}
              color='#6646ee'
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.innerContainer}>
            <Title style={styles.title}>Create a new chat room</Title>
            <FormInput
              labelName='Room Name'
              value={room}
              onChangeText={text => setRoom(text)}
              clearButtonMode='while-editing'
            />
            <FormButton
              title='Create'
              modeValue='contained'
              labelStyle={styles.buttonLabel}
              onPress={() => createChatRoom()}
              disabled={roomName.length === 0}
            />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  buttonLabel: {
    fontSize: 22
  }
});