import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUyBhLFNtn7SkludHAOM6gl7ILwd0EzDc",
  authDomain: "simple-todo-app-9d980.firebaseapp.com",
  projectId: "simple-todo-app-9d980",
  storageBucket: "simple-todo-app-9d980.appspot.com",
  messagingSenderId: "870772009870",
  appId: "1:870772009870:web:323f668b554117ea5a52df",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
