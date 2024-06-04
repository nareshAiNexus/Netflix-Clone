// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIZL4bus5kD1HxK3K73Z7VpJfOV543LpU",
  authDomain: "netflix-clone-d29ac.firebaseapp.com",
  projectId: "netflix-clone-d29ac",
  storageBucket: "netflix-clone-d29ac.appspot.com",
  messagingSenderId: "470881302236",
  appId: "1:470881302236:web:7d46930ad0d5ee2efb6619",
  measurementId: "G-CCS4ZVBRG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);