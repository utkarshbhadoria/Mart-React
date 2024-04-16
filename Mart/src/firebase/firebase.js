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
  apiKey: "AIzaSyBPL9VCL1gbzu7KkYde-xPMsvkDtDFU7no",
  authDomain: "emart-36913.firebaseapp.com",
  projectId: "emart-36913",
  storageBucket: "emart-36913.appspot.com",
  messagingSenderId: "472400247779",
  appId: "1:472400247779:web:d56b101fbd8e955e813ed6",
  measurementId: "G-Q90GEXTB0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const storge = getStorage();
const db = getFirestore();

//collection ref
const colref = collection(db, 'Product')
getDocs(colref)
  .then((snapshot)=>{
    console.log(snapshot.docs);
  })

export {auth , app , analytics, db, storge }