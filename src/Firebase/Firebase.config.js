// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ehAE-9eOr1RjM-F_1OUz_cDXP8zK-Ew",
  authDomain: "email-password-projects.firebaseapp.com",
  projectId: "email-password-projects",
  storageBucket: "email-password-projects.appspot.com",
  messagingSenderId: "972864416283",
  appId: "1:972864416283:web:92139e08811776737ba6be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;