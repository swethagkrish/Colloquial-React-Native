import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigation';
import { startClock } from 'react-native-reanimated';
import Login from '../screens/LoginScreen/Login';
import SignUp from '../screens/SignUpScreen/SignUp';

const Stack = createStackNavigator();

export default function AppNavigation() {

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Home' component={Tabs} />
        </Stack.Navigator>
    );
}