// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLEq5RKOXsCPXCgjaxa3RAhbu5yu-N7_E",
  authDomain: "betterrussian-25f5c.firebaseapp.com",
  databaseURL: "https://betterrussian-25f5c-default-rtdb.firebaseio.com",
  projectId: "betterrussian-25f5c",
  storageBucket: "betterrussian-25f5c.appspot.com",
  messagingSenderId: "287311448430",
  appId: "1:287311448430:web:90f34912c07b2a3e2f597f",
  measurementId: "G-E08585RDPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };