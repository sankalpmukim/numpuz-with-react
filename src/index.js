import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board";

const generateInitArray = (gridSize) => {
  const initArray = Array.from({ length: gridSize * gridSize }, (_, index) =>
    String(index + 1)
  );
  initArray[initArray.length - 1] = "##";
  initArray.sort(() => Math.random() - 0.5);
  return initArray;
};

const swapArrayElements = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
  return arr;
};

const Game = () => {
  const [gridSize, setGridSize] = useState(4);
  const [squares, setSquares] = useState(generateInitArray(gridSize));
  useEffect(() => {
    setSquares(generateInitArray(gridSize));
  }, [gridSize]);

  const movable = (idx) => {
    const mover = squares.indexOf("##");
    // Horizontal:-1
    // Vertical:1
    // Not possible:0
    if (idx === mover) {
      return 0;
    }
    if (idx % gridSize === mover % gridSize) {
      return 1;
    } else {
      const BEGIN = mover - (mover % gridSize);
      if (idx >= BEGIN && idx <= BEGIN + gridSize - 1) {
        return -1;
      }
      return 0;
    }
  };

  const verticalChange = (idx, mover) => {
    // console.log(gridSize);
    let newSquares = squares.slice();
    if (idx < mover) {
      while (newSquares.indexOf("##") !== idx) {
        newSquares = swapArrayElements(
          newSquares,
          newSquares.indexOf("##"),
          newSquares.indexOf("##") - gridSize
        );
      }
    } else if (idx > mover) {
      while (newSquares.indexOf("##") !== idx) {
        // console.log(gridSize);
        // console.log(newSquares);
        newSquares = swapArrayElements(
          newSquares,
          newSquares.indexOf("##"),
          newSquares.indexOf("##") + gridSize
        );
      }
    }
    setSquares(newSquares);
  };

  const horizontalChange = (idx, mover) => {
    let newSquares = squares.slice();
    if (idx < mover) {
      while (newSquares.indexOf("##") !== idx) {
        newSquares = swapArrayElements(
          newSquares,
          newSquares.indexOf("##"),
          newSquares.indexOf("##") - 1
        );
      }
    } else if (idx > mover) {
      while (newSquares.indexOf("##") !== idx) {
        newSquares = swapArrayElements(
          newSquares,
          newSquares.indexOf("##"),
          newSquares.indexOf("##") + 1
        );
      }
    }
    setSquares(newSquares);
  };

  const handleClick = (i) => {
    // console.log(i);
    if (movable(i) !== 0) {
      if (movable(i) === 1) {
        verticalChange(i, squares.indexOf("##"));
      } else {
        horizontalChange(i, squares.indexOf("##"));
      }
    }
  };

  return (
    <div>
      <h1>Number puzzle!</h1>
      <div className="game">
        <div className="details">
          <label htmlFor="number">
            <h3>
              Decide grid size:
              <input
                type="number"
                value={gridSize}
                onChange={(event) => setGridSize(Number(event.target.value))}
                id="number"
                min="2"
                max="10"
              />
            </h3>
          </label>
        </div>
        <Board
          squares={squares}
          gridSize={gridSize}
          squareClick={handleClick}
        />
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
