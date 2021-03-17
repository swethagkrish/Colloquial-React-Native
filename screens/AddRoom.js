import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import { firestore } from '../components/Firebase/method';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function AddRoom({navigation}) {
    const [room, setRoom] = useState('');

    function create() {
        if (room.length > 0) {
            firestore.collection('threads').add({
                name: room,
                latestMessage: {
                    text: 'You have joined ${room}.',
                    createdAt: new Date().getTime()
                }
            })
            .then(docRef => {
                docRef.collection('messages').add({
                    text: 'You have joined ${room}.',
                    createdAt: new Date().getTime(),
                    system: true
                });
                navigation.navigate('Chatroom');
            });
        }
    };

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
              onPress={() => create()}
              disabled={room.length === 0}
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
