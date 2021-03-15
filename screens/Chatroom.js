import React, { useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Divider } from 'react-native-paper';
import FormButton from '../components/FormButton';
import { firestore } from '../components/Firebase/method'

export default function Chatroom() {
    const [thread, setThread] = useState([]);

    useEffect(() => {
        const unscrubscribe = firestore
        .collection('threads')
        .onSnapshot((querySnapshot) => {
            const threads = querySnapshot.docs.map(documentSnapshot => {
                
            })
        })
    })
  return (
    <View style={styles.container}>
      <FormButton
        modeValue='contained'
        title='Add Room'
        onPress={() => navigation.navigate('AddRoom')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});