import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board";

const generateInitArray = (gridSize) => {
  const initArray = Array.from({ length: gridSize * gridSize }, (_, index) =>
    String(index + 1)
  );
  // initArray[initArray.length - 1] = initArray.length - 1;
  // initArray[initArray.length - 2] = "##";
  // return initArray;
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

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const Game = () => {
  const [gridSize, setGridSize] = useState(4);
  const [squares, setSquares] = useState(generateInitArray(gridSize));
  const [won, setWon] = useState(false);
  useEffect(() => {
    setSquares(generateInitArray(gridSize));
  }, [gridSize]);
  useEffect(() => {
    const newSquares = squares.slice();
    if (newSquares.indexOf("##") === -1) {
      setWon(true);
      return;
    }
    const SIZE = Math.sqrt(newSquares.length);
    const sortedArray = Array.from({ length: SIZE * SIZE }, (_, index) =>
      String(index + 1)
    );
    newSquares[newSquares.indexOf("##")] = String(newSquares.length);
    if (arraysEqual(newSquares, sortedArray)) {
      console.log("Game won");
      setWon(true);
      return;
    }
    console.log("Game not won");
    setWon(false);
  }, [squares]);

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
    if (movable(i) !== 0 && won === false) {
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
          <div>
            <h3>{won ? "Game won" : "Game not won"}</h3>
          </div>
          <div>
            <button
              className="my-button"
              onClick={() => setSquares(generateInitArray(gridSize))}
            >
              Reset board
            </button>
          </div>
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
