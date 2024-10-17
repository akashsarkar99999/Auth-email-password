// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuUny0KqeOskeZt7S_OtW067nlOROuis8",
  authDomain: "auth-email-password-3b602.firebaseapp.com",
  projectId: "auth-email-password-3b602",
  storageBucket: "auth-email-password-3b602.appspot.com",
  messagingSenderId: "192273366250",
  appId: "1:192273366250:web:c496e85e9802141b61eb93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;