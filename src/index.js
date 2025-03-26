// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApUcgPd1twsGffTdGuVg-fLxlguCSDdrE",
  authDomain: "itd108-iotproject.firebaseapp.com",
  projectId: "itd108-iotproject",
  storageBucket: "itd108-iotproject.appspot.com",
  messagingSenderId: "731543847121",
  appId: "1:731543847121:web:a81af8f8533c228a2185f0",
  measurementId: "G-L1EX9WF8LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);