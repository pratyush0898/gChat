// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDxjdf15YrxZWHZhJmJJONwO4IaiyRzgl4",
    authDomain: "globelchaters.firebaseapp.com",
    projectId: "globelchaters",
    storageBucket: "globelchaters.firebasestorage.app",
    messagingSenderId: "447837115531",
    appId: "1:447837115531:web:dda9a7748b7524e4a4308e",
    measurementId: "G-3RTSZ3GWWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, db, googleProvider };

