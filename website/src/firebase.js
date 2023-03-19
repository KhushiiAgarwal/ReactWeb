//import firebase from "firebase/app";
//import { initializeApp } from "firebase/app";
import firebase from './firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHlpUH2vy4Mm1S5OdoHwOWtBz6Bry4hDM",
  authDomain: "authstpatil.firebaseapp.com",
  projectId: "authstpatil",
  storageBucket: "authstpatil.appspot.com",
  messagingSenderId: "895525074936",
  appId: "1:895525074936:web:a93a1f0eb937733388080d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};