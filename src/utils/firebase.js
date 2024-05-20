// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh3mAGZwhbZirDmAVXX1V8rLA3GgY2rZE",
  authDomain: "netflixgpt-a59be.firebaseapp.com",
  projectId: "netflixgpt-a59be",
  storageBucket: "netflixgpt-a59be.appspot.com",
  messagingSenderId: "744820008159",
  appId: "1:744820008159:web:54b47c320ec1277dd8756a",
  measurementId: "G-45NQ6FSENG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
