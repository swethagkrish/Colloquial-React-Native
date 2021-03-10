import React, { useContext } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import TwemojiText from 'react-native-twemojis';
import { firebase } from '../../components/Firebase/method';
import { UserAuthContext } from './UserAuthProvider';

export default function Welcome( {navigation} ) {

  const onLogoutPress = () => {
    logOut();
    navigation.navigate('Login');
  }

    return (
        <View style={styles.container}>
          <Text>Welcome to Colloquial!</Text>
          <Text>What language are you learning?</Text>
          {/* Select language section */}
          <TouchableOpacity
              style={}
              onPress={() => navigation.navigate('Filter', {language: 'fr'})}
              >
            <TwemojiText>🇫🇷 France</TwemojiText>
          </TouchableOpacity>
          <TouchableOpacity
              style={}
              onPress={() => navigation.navigate('Filter', {language: 'de'})}
              >
            <TwemojiText>🇩🇪 Germany</TwemojiText>
          </TouchableOpacity>
          <TouchableOpacity
              style={}
              onPress={() => navigation.navigate('Filter', {language: 'it'})}
              >
            <TwemojiText>🇮🇹 Italy</TwemojiText>
          </TouchableOpacity>
          <TouchableOpacity
              style={}
              onPress={() => navigation.navigate('Filter', {language: 'es'})}
              >
            <TwemojiText>🇪🇸 Spain</TwemojiText>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => onLogoutPress()}>
              <Text style={styles.buttonTitle}>Log out</Text>
          </TouchableOpacity>
        </View>
      );
    }