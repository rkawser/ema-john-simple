// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs8lBdsQLX5izxTnbBop_LDDj-x_TlW7A",
  authDomain: "simple-ema-john-54.firebaseapp.com",
  projectId: "simple-ema-john-54",
  storageBucket: "simple-ema-john-54.appspot.com",
  messagingSenderId: "455013727120",
  appId: "1:455013727120:web:5e6df70cccdd385ea55115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;