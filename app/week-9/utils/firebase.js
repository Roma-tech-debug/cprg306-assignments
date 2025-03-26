// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDay99IW0UJQTlBVC9FDRfL162SKjus1pE",
  authDomain: "fir-authentication-bcc9b.firebaseapp.com",
  projectId: "fir-authentication-bcc9b",
  storageBucket: "fir-authentication-bcc9b.firebasestorage.app",
  messagingSenderId: "686933828127",
  appId: "1:686933828127:web:d900fc60157bd6afd9eb2a",
  measurementId: "G-0VSCP69D9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Correct export of auth
const auth = getAuth(app);
export { auth };