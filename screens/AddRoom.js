import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import { firestore } from '../components/Firebase/method';
import FormButton from '../components/FormButton';

export default function AddRoom({navigation}) {
    const [room, setRoom] = useState('');

    function create() {
        if (room.length > 0) {
            var message = 'You have joined ' + room + '.';
            firestore.collection('threads').add({
                name: room,
                latestMessage: {
                    text: message,
                    createdAt: new Date().getTime()
                }
            })
            .then(docRef => {
                docRef.collection('messages').add({
                    text: message,
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
              color='#006BA6'
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.innerContainer}>
            <Title style={styles.title}>Create a new chat room</Title>
            {/*<FormInput
              labelName='Room Name'
              value={room}
              onChangeText={text => setRoom(text)}
              clearButtonMode='while-editing'
            />*/}
            <View style={styles.ratingBox}>
              <TextInput
                  placeholder=""
                  keyboardAppearance="default"
                  maxLength={10}
                  numberOfLines={1}
                  multiline={true}
                  spellCheck={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  placeholderTextColor="rgba(0,0,0,1)"
                  style={styles.ratingInput}
                  value={room}
                  onChangeText={(text) => setRoom(text)}
              ></TextInput>
            </View>
            
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
      fontFamily: "OpenSans_600SemiBold",
      fontSize: 24,
      marginBottom: 10,
      color: "#006BA6"
    },
    buttonLabel: {
      fontFamily: "OpenSans_700Bold",
      fontSize: 22, 
      color: "#006BA6"
    },
    ratingInput: {
      fontFamily: "OpenSans_400Regular",
      color: "#121212",
      fontSize: 16,
      marginLeft: 15
    },
    ratingBox: {
      width: 295,
      height: 50,
      borderWidth: 6,
      borderColor: "rgba(0,107,166,1)",
      borderRadius: 74,
      borderStyle: "solid",
      backgroundColor: "rgba(255,255,255,1)",
      alignSelf: "center",
      marginLeft: 10
    }
  });
