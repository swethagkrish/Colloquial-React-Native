import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserAuthContext } from './UserAuthProvider';
import { firestore } from '../components/Firebase/method'
import Tabs from './TabNavigation';

const Stack = createStackNavigator();

export default function AppNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Tabs} />
        </Stack.Navigator>
    );
}