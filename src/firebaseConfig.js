// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApGmRLgybQ0ncigplIYkSMZw2yBtiogPk",
    authDomain: "ecommerce-coderhouse-cf100.firebaseapp.com",
    projectId: "ecommerce-coderhouse-cf100",
    storageBucket: "ecommerce-coderhouse-cf100.appspot.com",
    messagingSenderId: "486601663591",
    appId: "1:486601663591:web:720c530bb5207eaa5260c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db