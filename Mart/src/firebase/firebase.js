// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3nHTry7XnhAHlgQNN9jb51x4bShiPeLw",
  authDomain: "mart-9f196.firebaseapp.com",
  projectId: "mart-9f196",
  storageBucket: "mart-9f196.appspot.com",
  messagingSenderId: "741138338631",
  appId: "1:741138338631:web:226ed79dd9017f6bfd3262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export {auth , app , analytics, db, storage }