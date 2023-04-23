// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALYr8Fs0QXckdK68J1HAbG2ytV1WelR0A",
    authDomain: "gopolytech-97cea.firebaseapp.com",
    projectId: "gopolytech-97cea",
    storageBucket: "gopolytech-97cea.appspot.com",
    messagingSenderId: "115500997984",
    appId: "1:115500997984:web:a760d5e6d8ebf14ebdd205"
  };

// Initialize Firebase
let app;
if (firebase.getApps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.getApp()
}
const storage = getStorage(app)
const auth = getAuth()

export {auth, storage}