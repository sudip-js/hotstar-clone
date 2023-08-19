import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxpzMT6IiGWM-0hAkl8u08Vo9HyqdNPPI",
  authDomain: "disney-hotstar-869f6.firebaseapp.com",
  projectId: "disney-hotstar-869f6",
  storageBucket: "disney-hotstar-869f6.appspot.com",
  messagingSenderId: "481368966064",
  appId: "1:481368966064:web:1d482ff02bcc1fd19a0c75",
  measurementId: "G-KVB95SMD8F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
