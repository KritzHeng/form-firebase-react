import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Initialize Firebase
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2pxp5gTsGXPxvvb80A9Dlo_giMtYAmxg",
  authDomain: "fir-information-1cb12.firebaseapp.com",
  projectId: "fir-information-1cb12",
  storageBucket: "fir-information-1cb12.appspot.com",
  messagingSenderId: "532021424923",
  appId: "1:532021424923:web:8bf52ee269b7af8f46d9be",
  measurementId: "G-9JT9FVL5ND"
});
var db = firebaseApp.firestore();

export { db };