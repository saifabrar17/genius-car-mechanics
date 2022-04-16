// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6CLo_1ZfV4KSQ2arx1hdAeyvVP5vBgOI",
  authDomain: "genius-car-mechanics-d0c37.firebaseapp.com",
  projectId: "genius-car-mechanics-d0c37",
  storageBucket: "genius-car-mechanics-d0c37.appspot.com",
  messagingSenderId: "338575320128",
  appId: "1:338575320128:web:dfc41e7ed4a4e67f66aba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;