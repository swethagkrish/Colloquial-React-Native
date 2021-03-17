import React, { useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Divider } from 'react-native-paper';
import FormButton from '../components/FormButton';
import { firestore } from '../components/Firebase/method';

export default function Chatroom() {
    const [thread, setThread] = useState([]);

    useEffect(() => {
        const unscrubscribe = firestore
        .collection('threads')
        .onSnapshot((querySnapshot) => {
            const threads = querySnapshot.docs.map(documentSnapshot => {
                return {
                  _id: documentSnapshot.id,
                  // give defaults
                  name: '',
      
                  latestMessage: {
                    text: ''
                  },
                  ...documentSnapshot.data()
                };
            });

            setThread(threads);
        });

        return () => unscrubscribe();
    }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={thread}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Room', { thread: item })}
          >
            <List.Item
              title={item.name}
              description={item.latestMessage.text}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  listTitle: {
    fontSize: 22
  },
  listDescription: {
    fontSize: 16
  }
});