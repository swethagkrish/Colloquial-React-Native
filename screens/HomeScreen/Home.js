import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { NavigationHelpersContext } from '@react-navigation/native';
import { logout } from '../../components/Firebase/method'

export default function Home({navigation}) {

  async function logOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <View style={styles.container}>
          <Text>Welcome to Colloquial!</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={() => logOut()}>
              <Text style={styles.buttonTitle}>Log out</Text>
          </TouchableOpacity>
        </View>
      );
    }