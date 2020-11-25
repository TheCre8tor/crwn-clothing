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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// This trigger the Google select user popup
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
