import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board";

class Game extends React.Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
