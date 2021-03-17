import firebase from 'firebase';
import firebaseConfig from './config'
import 'firebase/auth';
import 'firebase/firestore';
import { Alert } from 'react-native';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Connect!")
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();

export const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const resetPass = email => auth.sendPasswordResetEmail(email);

export const reauthenticate = (pass) => {
    var user = auth.currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(user.email, pass);
    return user.reauthenticateWithCredential(credential);
} 

export const changePass = (currentPass, newPass) => {
    reauthenticate(currentPass).then();
}

