import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCMHQPjou6nPufBAwgHjhU3LyrT6059F1E',
    authDomain: 'my-subscriptions-37d49.firebaseapp.com',
    projectId: 'my-subscriptions-37d49',
    storageBucket: 'my-subscriptions-37d49.appspot.com',
    messagingSenderId: '286273423709',
    appId: '1:286273423709:web:88f3464bde428e058340b4'
  };

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();