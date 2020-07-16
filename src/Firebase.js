import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcKlNhgro2DrPDp6TsTkrKjEGK44E1-kk",
    authDomain: "fir-auth-react-9a803.firebaseapp.com",
    databaseURL: "https://fir-auth-react-9a803.firebaseio.com",
    projectId: "fir-auth-react-9a803",
    storageBucket: "fir-auth-react-9a803.appspot.com",
    messagingSenderId: "244916460313",
    appId: "1:244916460313:web:3136cd67913d1acc150388",
    measurementId: "G-W54FWWJ9YB"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;