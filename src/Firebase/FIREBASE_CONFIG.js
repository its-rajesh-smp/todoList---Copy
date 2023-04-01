import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


// Data-Config
const firebaseConfig = {
    apiKey: "AIzaSyCnb0N6P1jPEBEozlCYJQ16KGkFQZmLA7c",
    authDomain: "fir-test-145f3.firebaseapp.com",
    projectId: "fir-test-145f3",
    storageBucket: "fir-test-145f3.appspot.com",
    messagingSenderId: "30127263508",
    appId: "1:30127263508:web:4d6507cb6fe94b463b7c01",
    measurementId: "G-1VBV7JLQYH"
};


// Create a connection with firebase with the defails
const app=initializeApp(firebaseConfig);

// Connect With a detabse
const DB = getFirestore(app)

// Export the Database so that we can do CURD operation
export default DB;