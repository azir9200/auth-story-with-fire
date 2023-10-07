// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1jxY7BRRPtYIyj-GJsxNsSxhP-3iqx1s",
  authDomain: "auth-story-with-fire.firebaseapp.com",
  projectId: "auth-story-with-fire",
  storageBucket: "auth-story-with-fire.appspot.com",
  messagingSenderId: "55233276352",
  appId: "1:55233276352:web:6a51aa11d5a4fb9e704025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;