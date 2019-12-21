import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCHqllPA8CW7HgcDVZSZnvAsib9BSZ0fJg",
  authDomain: "sociovents.firebaseapp.com",
  databaseURL: "https://sociovents.firebaseio.com",
  projectId: "sociovents",
  storageBucket: "sociovents.appspot.com",
  messagingSenderId: "851987011884",
  appId: "1:851987011884:web:2c77ffc2ec71165637b489",
  measurementId: "G-MQSW8YBFYV"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;