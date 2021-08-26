import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";
import { UserProvider } from "./UserContext";
import { initialState, userReducer } from "./UserReducer";

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={userReducer}>
      <Game />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
