// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1wLnIhRTpv4m6mav4caskS3blQAlHLuA",
  authDomain: "lab-programs-e8661.firebaseapp.com",
  projectId: "lab-programs-e8661",
  storageBucket: "lab-programs-e8661.firebasestorage.app",
  messagingSenderId: "241174175689",
  appId: "1:241174175689:web:535b393eb4f1237e961218"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
