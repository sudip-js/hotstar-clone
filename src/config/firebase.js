import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_Firebase_ApiKey,
  authDomain: process.env.REACT_APP_Firebase_AuthDomain,
  projectId: process.env.REACT_APP_Firebase_ProjectId,
  storageBucket: process.env.REACT_APP_Firebase_StorageBucket,
  messagingSenderId: process.env.REACT_APP_Firebase_MessagingSenderId,
  appId: process.env.REACT_APP_Firebase_AppId,
  measurementId: process.env.REACT_APP_Firebase_MeasurementId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider };
