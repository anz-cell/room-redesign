// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "course-generator-dbe76.firebaseapp.com",
    projectId: "course-generator-dbe76",
    storageBucket: "course-generator-dbe76.appspot.com",
    messagingSenderId: "190219819394",
    appId: "1:190219819394:web:2faca40fcc05c5ef15d79b",
    measurementId: "G-46VR48ZBTX"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app) 