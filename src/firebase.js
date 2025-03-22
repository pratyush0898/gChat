// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (update with your actual config)
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
const db = getFirestore(app); // Use "db" consistently for Firestore
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
