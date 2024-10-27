
// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCchvlzYsftnTinRx0SoBerzUp_6tqZc3w",
    authDomain: "student-teacher-booking-acf0e.firebaseapp.com",
    projectId: "student-teacher-booking-acf0e",
    storageBucket: "student-teacher-booking-acf0e.appspot.com",
    messagingSenderId: "86141861330",
    appId: "1:86141861330:web:98618a38c7949a8d789c0b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
