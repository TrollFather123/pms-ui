/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNLwnvvw2Aorg1zf9ZKs62dbw4hsX3FaQ",
  authDomain: "pms-ui-bc525.firebaseapp.com",
  projectId: "pms-ui-bc525",
  storageBucket: "pms-ui-bc525.appspot.com",
  messagingSenderId: "595881251325",
  appId: "1:595881251325:web:a3faf6665c2e4e5ae20994",
  measurementId: "G-LL7KMFN6F8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
