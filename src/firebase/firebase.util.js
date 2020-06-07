import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJHDNyl5k9SThZBkDB7OS96MEouNwgzd8",
  authDomain: "fits-shop.firebaseapp.com",
  databaseURL: "https://fits-shop.firebaseio.com",
  projectId: "fits-shop",
  storageBucket: "fits-shop.appspot.com",
  messagingSenderId: "225715998715",
  appId: "1:225715998715:web:ddb3757b7a4b7a9882055e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
