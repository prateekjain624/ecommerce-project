// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR5q6quHXSM15u1ohgSagAjLwrfrSchCs",
  authDomain: "shopper-website-1654e.firebaseapp.com",
  projectId: "shopper-website-1654e",
  storageBucket: "shopper-website-1654e.firebasestorage.app",
  messagingSenderId: "63079232828",
  appId: "1:63079232828:web:36f94f9d5201d51ef09a39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
