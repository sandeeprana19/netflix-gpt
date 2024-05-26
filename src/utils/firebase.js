// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ1TLzF6p-cgLdkM0oJjCHDnqddBGOg9k",
  authDomain: "moviesarenagpt.firebaseapp.com",
  projectId: "moviesarenagpt",
  storageBucket: "moviesarenagpt.appspot.com",
  messagingSenderId: "340515096837",
  appId: "1:340515096837:web:85e75d3dd1301b42ea8f6c",
  measurementId: "G-FWFTJ6EHY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
