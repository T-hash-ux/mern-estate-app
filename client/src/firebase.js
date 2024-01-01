// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93ea6.firebaseapp.com",
  projectId: "mern-estate-93ea6",
  storageBucket: "mern-estate-93ea6.appspot.com",
  messagingSenderId: "243171738662",
  appId: "1:243171738662:web:651dbed1b7af780e3552e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);