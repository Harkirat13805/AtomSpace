// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBffgpXN4ocuzedvjWkfR8dFfZ57WtfXfQ",
  authDomain: "atom-space.firebaseapp.com",
  projectId: "atom-space",
  storageBucket: "atom-space.appspot.com",
  messagingSenderId: "3564381533",
  appId: "1:3564381533:web:1acc3f7ae9aa2906aef4b4",
  measurementId: "G-T9WZ1ZX433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);