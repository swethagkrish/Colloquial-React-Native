import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Contacts from '../screens/Contacts';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Contacts' component={Contacts} />
        </Stack.Navigator>
    )
}
