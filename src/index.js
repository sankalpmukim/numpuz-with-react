import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Components/Game";
import { UserProvider } from "./Context/UserContext";
import { initialState, userReducer } from "./Context/UserReducer";
// import { isSolvable } from "./Context/utils";

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={userReducer}>
      <Game />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
