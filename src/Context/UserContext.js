import React from "react";
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDBixDXHM4NCrY27GGRPP3X7SozpeUNjzw",
  authDomain: "numpuz-c8a36.firebaseapp.com",
  projectId: "numpuz-c8a36",
  storageBucket: "numpuz-c8a36.appspot.com",
  messagingSenderId: "188829020133",
  appId: "1:188829020133:web:5b1c6f9c42aea6c584c90c",
  measurementId: "G-J8LHBKCHE8",
};
firebase.initializeApp(config);

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const UserProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
