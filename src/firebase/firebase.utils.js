import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDWicQN9ZLum_CgIAto0WKnKSTY4E8pmH4',
    authDomain: 'crown-database-9503f.firebaseapp.com',
    databaseURL: 'https://crown-database-9503f.firebaseio.com',
    projectId: 'crown-database-9503f',
    storageBucket: 'crown-database-9503f.appspot.com',
    messagingSenderId: '257255803398',
    appId: '1:257255803398:web:e1ce2d7947fcc661225187',
    measurementId: 'G-CSP7MS3TPG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// This trigger the Google select user popup
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;