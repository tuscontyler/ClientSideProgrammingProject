// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIsEkTWcwTbZGCIhsPXX6wW-TEqZ_FHu0",
  authDomain: "laundromat-httyl.firebaseapp.com",
  projectId: "laundromat-httyl",
  storageBucket: "laundromat-httyl.appspot.com",
  messagingSenderId: "475762654501",
  appId: "1:475762654501:web:b54638dba895392b802ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);