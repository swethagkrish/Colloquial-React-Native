import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabNavigation';
import MediaNavigation from './MediaNavigation';
import ProfileNavigation from './ProfileNavigation';

const Stack = createStackNavigator();

export default function AppNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Tabs} />
        </Stack.Navigator>
    );
}