import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAJAguMf-5rYVuuifCqBqCeygtFzq-maA",
    authDomain: "crw-db.firebaseapp.com",
    databaseURL: "https://crw-db.firebaseio.com",
    projectId: "crw-db",
    storageBucket: "",
    messagingSenderId: "222960225863",
    appId: "1:222960225863:web:9eeda1aad66baab4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
