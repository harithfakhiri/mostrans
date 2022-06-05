// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAI5L60T-SD43nEUfPw6wRwnNmP8uBCUY",
  authDomain: "rickandmorty-101df.firebaseapp.com",
  projectId: "rickandmorty-101df",
  storageBucket: "rickandmorty-101df.appspot.com",
  messagingSenderId: "317235386216",
  appId: "1:317235386216:web:8f5dc34f961ff1b8ffe8dd",
  measurementId: "G-QE5PE3J377",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
