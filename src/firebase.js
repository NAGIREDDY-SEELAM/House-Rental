// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // ✅ Add missing import
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB963rjkuTRuKuWM3zkk3kn3_NFV4jwqUQ",
  authDomain: "houserental-afd17.firebaseapp.com",
  projectId: "houserental-afd17",
  storageBucket: "houserental-afd17.appspot.com", // ✅ Corrected `.app` to `.appspot.com`
  messagingSenderId: "699327225943",
  appId: "1:699327225943:web:8001a12179d5aa53930312",
  measurementId: "G-K7D0Q2LJ9T"
};

const app = initializeApp(firebaseConfig);

// ✅ Initialize Services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app); // Optional if you're using file uploads

// ✅ Export everything needed
export { auth, provider, db, storage };
