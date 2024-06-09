// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBuQZAibi1Y9jJAD6QnYsmyG_9a1VbzBvc",
    authDomain: "citas-66dd7.firebaseapp.com",
    projectId: "citas-66dd7",
    storageBucket: "citas-66dd7.appspot.com",
    messagingSenderId: "220623453870",
    appId: "1:220623453870:web:722a20bf6f22c8007cf73f",
    measurementId: "G-2NTFGZNESD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;