// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';

import 'firebase/database';
import 'firebase/compat';
import 'firebase/firestore';

import { getDatabase } from 'firebase/database';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIlU_qqNsurA3BnG0Sx9T0wYT4hMUowFM",
  authDomain: "dissertation-91116.firebaseapp.com",
  databaseURL: "https://dissertation-91116-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dissertation-91116",
  storageBucket: "dissertation-91116.appspot.com",
  messagingSenderId: "228123709941",
  appId: "1:228123709941:web:907c9a5364d018b02e90bc",
  measurementId: "G-DGG5MCEDHX"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()


export {database};