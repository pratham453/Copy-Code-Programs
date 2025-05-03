// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhN0j0WUqOLH6A20NdqIGnOq4hZRXxF4k",
  authDomain: "copy-paste-2730f.firebaseapp.com",
  projectId: "copy-paste-2730f",
  storageBucket: "copy-paste-2730f.firebasestorage.app",
  messagingSenderId: "245512721916",
  appId: "1:245512721916:web:8e2850f86bd1669f274e79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);