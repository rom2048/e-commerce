import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBz907DpVQg-NL5UJaNuoGKV24L0iQH7CA",
    authDomain: "shop-db-23a31.firebaseapp.com",
    projectId: "shop-db-23a31",
    storageBucket: "shop-db-23a31.appspot.com",
    messagingSenderId: "413947300804",
    appId: "1:413947300804:web:a30f83c208bb3ece28f291",
    measurementId: "G-8WTKDV9966"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const filestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;