import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCfa7uuV1-4R8Qcxj7tlk-CfaBpvptxuJQ",
    authDomain: "disney-world-bb8a3.firebaseapp.com",
    projectId: "disney-world-bb8a3",
    storageBucket: "disney-world-bb8a3.appspot.com",
    messagingSenderId: "435203409221",
    appId: "1:435203409221:web:7aa93822a5549ed5c6ea2c",
    measurementId: "G-1LVTJDEYQB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const  facebookProvider = new firebase.auth.FacebookAuthProvider();

  export { auth, db, googleProvider,facebookProvider  }
