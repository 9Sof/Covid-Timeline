import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './config';

try {
    firebase.initializeApp(config);
} catch (e) {

}

export default firebase;