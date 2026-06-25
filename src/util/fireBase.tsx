// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-STK6znDWLZ-YcPugmkKJIQJMN7yPl_c",
  authDomain: "netflix-gpt-1159b.firebaseapp.com",
  projectId: "netflix-gpt-1159b",
  storageBucket: "netflix-gpt-1159b.firebasestorage.app",
  messagingSenderId: "365567121134",
  appId: "1:365567121134:web:98d58264ba887ba11585ff",
  measurementId: "G-X7JBW5HQ1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);