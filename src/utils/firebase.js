// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXM4IFGl_vPWeD49UgmUWp4gvvVOnwW8U",
  authDomain: "webflixgpt-f570d.firebaseapp.com",
  projectId: "webflixgpt-f570d",
  storageBucket: "webflixgpt-f570d.appspot.com",
  messagingSenderId: "412470955394",
  appId: "1:412470955394:web:521512814d3a5817e8539b",
  measurementId: "G-9H6SQP7NDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
