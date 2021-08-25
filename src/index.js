import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "firebase";
import Game from "./Game";

firebase.initializeApp({
  apiKey: "AIzaSyDBixDXHM4NCrY27GGRPP3X7SozpeUNjzw",
  authDomain: "numpuz-c8a36.firebaseapp.com",
  projectId: "numpuz-c8a36",
  storageBucket: "numpuz-c8a36.appspot.com",
  messagingSenderId: "188829020133",
  appId: "1:188829020133:web:5b1c6f9c42aea6c584c90c",
  measurementId: "G-J8LHBKCHE8",
});

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
