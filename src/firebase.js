// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa7aRw5qaxoa4ccqJgztzeMc2vWmkODjI",
  authDomain: "ski-resort-finder-b5eda.firebaseapp.com",
  projectId: "ski-resort-finder-b5eda",
  storageBucket: "ski-resort-finder-b5eda.appspot.com", // Fixed the storageBucket typo
  messagingSenderId: "297858163907",
  appId: "1:297858163907:web:97baf5edddc49cfe28ae76",
  measurementId: "G-E9XMG3LMZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app; 
