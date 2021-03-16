import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chatroom from '../screens/Chatroom';
import Chat from '../screens/Chat';
import AddRoom from '../screens/AddRoom';

const Stack = createStackNavigator();
const ChatStack = createStackNavigator();

function ChatNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Chatroom' component={Chatroom} options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon='message-plus'
              size={28}
              color='#ffffff'
              onPress={() => navigation.navigate('AddRoom')}
          />)
      })}
            />
      <Stack.Screen name='Room'
        component={Chat}
        options={({ route }) => ({
          title: route.params.thread.name
        })}
      />
    </Stack.Navigator>
  );
}

export default function ChatNavigator() {
  return (
    <ChatStack.Navigator mode='modal' headerMode='none'>
      <ChatStack.Screen name='Chat' component={ChatNavigation} />
      <ChatStack.Screen name='AddRoom' component={AddRoom} />
    </ChatStack.Navigator>
  );
}