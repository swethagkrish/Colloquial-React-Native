import React from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { firebase } from '../../components/Firebase/method';
import { NavigationHelpersContext } from '@react-navigation/native';

export default function Welcome({navigation}) {

  const onLogoutPress = () => {
    logOut();
  }
    return (
        <View style={styles.container}>
          <Text>Welcome to Colloquial!</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={() => onLogoutPress()}>
              <Text style={styles.buttonTitle}>Log out</Text>
          </TouchableOpacity>
        </View>
      );
    }