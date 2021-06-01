import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzkk0-2sW4JYrfcSAqRU7j4ymnwZrHBJs",
    authDomain: "todoapp-b0480.firebaseapp.com",
    projectId: "todoapp-b0480",
    storageBucket: "todoapp-b0480.appspot.com",
    messagingSenderId: "208366657972",
    appId: "1:208366657972:web:011e1e4855272e9ed192e1",
    measurementId: "G-7P3D53981Z"
});

const db = firebaseApp.firestore();

export default db;
