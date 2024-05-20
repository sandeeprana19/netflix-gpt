// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABZx96T4Mb9eJl2akHIDVkoS-LWYU1N34",
  authDomain: "netflixgpt-e128d.firebaseapp.com",
  projectId: "netflixgpt-e128d",
  storageBucket: "netflixgpt-e128d.appspot.com",
  messagingSenderId: "1031410357582",
  appId: "1:1031410357582:web:d2937f78b80420e2f67a1f",
  measurementId: "G-V84CNPMR81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
