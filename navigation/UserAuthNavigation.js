import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/WelcomeScreen/Welcome';
import SignUp from '../screens/SignUpScreen/SignUp';
import Login from '../screens/LoginScreen/Login';
//import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={SignUp} />
    </Stack.Navigator>
  );
}