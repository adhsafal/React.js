import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfsdLJ12REs94GyFYlmcNcNzNHks1E3sA",
  authDomain: "messenger-84504.firebaseapp.com",
  projectId: "messenger-84504",
  storageBucket: "messenger-84504.appspot.com",
  messagingSenderId: "173205901329",
  appId: "1:173205901329:web:12270f3ac4eba22022e1b0",
  measurementId: "G-TKY8QTRL7B",
});

const db = firebaseApp.firestore();

export default db;
