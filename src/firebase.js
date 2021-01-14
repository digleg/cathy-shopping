// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC51l_4ZocpbASPtdEaKZnA9AmzT1n_ots',
  authDomain: 'cathy-shopping.firebaseapp.com',
  projectId: 'cathy-shopping',
  storageBucket: 'cathy-shopping.appspot.com',
  messagingSenderId: '310941431694',
  appId: '1:310941431694:web:cde8b6c98086e815db56df',
  measurementId: 'G-PXNBF2BWLW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
