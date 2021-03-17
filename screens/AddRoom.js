import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import { firestore } from '../components/Firebase/method';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function AddRoom({navigation}) {
    const [room, setRoom] = useState('');

    function create() {

    }
}