// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR-8H6jOXOZGhPmtGJT5R1WenowYNivpM",
  authDomain: "auth-story-with-fire-ceffc.firebaseapp.com",
  projectId: "auth-story-with-fire-ceffc",
  storageBucket: "auth-story-with-fire-ceffc.appspot.com",
  messagingSenderId: "952316456482",
  appId: "1:952316456482:web:e9c24d3950922d8045a47b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;