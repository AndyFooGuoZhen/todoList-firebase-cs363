import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHg4xWSzMwFok2W0zoradyvGYOF_aN4AI",
    authDomain: "todolist-363.firebaseapp.com",
    projectId: "todolist-363",
    storageBucket: "todolist-363.appspot.com",
    messagingSenderId: "716026332680",
    appId: "1:716026332680:web:ad3e2ad63984923e1173bd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);