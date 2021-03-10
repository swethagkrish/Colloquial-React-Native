import firebase from 'firebase';
import firebaseConfig from './config'
import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Connect!")
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const resetPass = email => auth.sendPasswordResetEmail(email);