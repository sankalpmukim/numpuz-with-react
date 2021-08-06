import React from "react";
import "./index.css";
import Square from "./Square";
// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gridSize: 4,
//     };
//   }
//   render() {
//     const gridSize = this.state.gridSize;
//     const squares = Array(gridSize * gridSize)
//       .fill(null)
//       .map((num, idx) => <Square key={idx} />);
//     return <div className="board">{squares}</div>;
//   }
// }

const Board = (props) => {
  let squares = props.squares.slice();
  squares = squares.map((_, idx) => (
    <Square
      onClick={() => props.squareClick(idx)}
      key={idx}
      value={squares[idx]}
    />
  ));

  return (
    <div className="board" style={{ "--grid-size": props.gridSize }}>
      {squares}
    </div>
  );
};

export default Board;
