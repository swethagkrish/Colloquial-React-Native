import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { signUp, firestore } from '../../components/Firebase/method'
import DatePicker from 'react-native-datepicker';

export default function SignUp({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [birthdate, setDate] = useState(new Date())
    const [language, setLanguage] = useState([]);

    const items = [
        {
            name: 'German',
            children: [
                {
                    level: 'German A1'
                },
                {
                    level: 'German A2'
                },
                {
                    level: 'German B1'
                },
                {
                    level: 'German B2'
                },
                {
                    level: 'German C1'
                },
                {
                    level: 'German C2'
                }
            ]
        },
        {
            name: 'French',
            children: [
                {
                    level: 'French A1'
                },
                {
                    level: 'French A2'
                },
                {
                    level: 'French B1'
                },
                {
                    level: 'French B2'
                },
                {
                    level: 'French C1'
                },
                {
                    level: 'French C2'
                }
            ]
        },
        {
            name: 'Italian',
            children: [
                {
                    level: 'Italian A1'
                },
                {
                    level: 'Italian A2'
                },
                {
                    level: 'Italian B1'
                },
                {
                    level: 'Italian B2'
                },
                {
                    level: 'Italian C1'
                },
                {
                    level: 'Italian C2'
                }
            ]
        },
        {
            name: 'Spanish',
            children: [
                {
                    level: 'Spanish A1'
                },
                {
                    level: 'Spanish A2'
                },
                {
                    level: 'Spanish B1'
                },
                {
                    level: 'Spanish B2'
                },
                {
                    level: 'Spanish C1'
                },
                {
                    level: 'Spanish C2'
                }
            ]
        }
    ]

    const selectedLanguage = (selectedItems) => {
        setLanguage(selectedItems);
    }

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onSignUpPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        if (birthdate == new Date()) {
            alert("Please choose a date")
            return
        }
    
        signUp(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    fullName,
                    birthdate,
                    email,
                    language
                };
                const usersRef = firestore.collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Welcome')
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <View>
                    <Text>Your birthdate</Text>
                    <DatePicker
                        date={birthdate} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="Select date"
                        format="MM-DD-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                //display: 'none',
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                marginLeft: 36,
                            },
                        }}
                        onDateChange={(birthdate) => {
                            setDate(new Date(birthdate));
                        }} />
                </View>
                <View>
                    <SectionedMultiSelect
                        items={items}
                        subKey="children"
                        selectText="Select your language level"
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={selectedLanguage}
                        selectedItems={language}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSignUpPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}