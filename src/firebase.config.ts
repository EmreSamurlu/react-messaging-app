import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA96l2v46WJOM0N851mZeMesRhZ4zdCZi4',
  authDomain: 'react-messaging-app-e1bc5.firebaseapp.com',
  databaseURL: 'https://react-messaging-app-e1bc5-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'react-messaging-app-e1bc5',
  storageBucket: 'react-messaging-app-e1bc5.appspot.com',
  messagingSenderId: '336212834709',
  appId: '1:336212834709:web:9c634b920197e0989b1e9c',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
