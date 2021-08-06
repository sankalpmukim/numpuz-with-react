import React, { useState, useEffect, useRef } from "react";
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

const Board = () => {
  const [gridSize, setGridSize] = useState(4);
  const boardRef = useRef(null);
  useEffect(() => {
    boardRef.current.style.setProperty("--grid-size", gridSize);
  }, [gridSize]);
  const squares = Array(gridSize * gridSize)
    .fill(null)
    .map((_, idx) => <Square key={idx} />);
  return (
    <div>
      <input
        type="number"
        value={gridSize}
        onChange={(event) => setGridSize(event.target.value)}
      />
      <div ref={boardRef} className="board">
        {squares}
      </div>
    </div>
  );
};

export default Board;
