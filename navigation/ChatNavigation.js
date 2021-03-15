import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chatroom from '../screens/Chatroom';

const Stack = createStackNavigator();

export default function ChatNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Chatroom} />
    </Stack.Navigator>
  );
}