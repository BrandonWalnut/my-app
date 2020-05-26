import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC3pkalAJ9VtOiIIdbo7C-DSH0BPRJpl54",
    authDomain: "my-app-d0b2d.firebaseapp.com",
    databaseURL: "https://my-app-d0b2d.firebaseio.com",
    projectId: "my-app-d0b2d",
    storageBucket: "my-app-d0b2d.appspot.com",
    messagingSenderId: "394879101555",
    appId: "1:394879101555:web:342a3a016f4b6b41611806"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  
  export default firebase;
