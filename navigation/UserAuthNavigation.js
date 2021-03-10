import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../screens/SignUpScreen/SignUp';
import Login from '../screens/LoginScreen/Login';
import Tabs from './TabNavigation'
//import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={SignUp} />
      <Stack.Screen name='Home' component={Tabs} />
    </Stack.Navigator>
  );
}