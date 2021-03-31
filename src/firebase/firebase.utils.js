import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwBEkdntXwzSGr3d8qmDdf4I4cqKwZpX8",
  authDomain: "crwn-db-aca37.firebaseapp.com",
  projectId: "crwn-db-aca37",
  storageBucket: "crwn-db-aca37.appspot.com",
  messagingSenderId: "998510862876",
  appId: "1:998510862876:web:b5031f7217ec8c54dab5d9",
  measurementId: "G-5P6KT9QXY9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
