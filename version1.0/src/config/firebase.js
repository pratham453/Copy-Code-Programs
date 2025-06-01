// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjg-XpkbJv5-vjCDMpQS2LvS3OTqgcY_g",
  authDomain: "lab-assistant-396ce.firebaseapp.com",
  projectId: "lab-assistant-396ce",
  storageBucket: "lab-assistant-396ce.firebasestorage.app",
  messagingSenderId: "1087748960728",
  appId: "1:1087748960728:web:eebb8e1fbb2c828991c2ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Export the auth instance