import React, { useState, useEffect } from "react";
import Board from "./Board";
import Timer from "./Timer";
import LeaderboardMenu from "./LeaderboardMenu";
import "../index.css";
import {
  generateInitArray,
  swapArrayElements,
  arraysEqual,
} from "../Context/utils";
import firebase from "firebase";
import { useStore } from "../Context/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";

// const auth = firebase.auth();
const Game = () => {
  const [gridSize, setGridSize] = useState(4);
  const sqrs = generateInitArray(gridSize);
  const [squares, setSquares] = useState(sqrs);
  const [won, setWon] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [reset, setReset] = useState(false);
  const [{ auth, firestore }] = useStore();
  const [user] = useAuthState(auth);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--bg-color", "rgb(47,47,47)");
      document.documentElement.style.setProperty("--main-color", "white");
    } else {
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty(
        "--main-color",
        "rgb(47,47,47)"
      );
    }
  }, [darkMode]);
  useEffect(() => {
    if (gridSize < 2 || gridSize > 10) {
      alert("Gridsize can only be between 2 and 10!");
      setGridSize(4);
    } else {
      setReset(true);
      setSquares((_) => generateInitArray(gridSize));
      setIsActive(false);
    }
  }, [gridSize]);
  useEffect(() => {
    if (user === null) {
      setSquares((_) => generateInitArray(gridSize));
      setIsActive(false);
      setWon(false);
    }
  }, [user, gridSize]);
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
      // setTime(0);
      setIsActive(false);
      setWon(true);
      return;
    }
    setWon(false);
  }, [squares]);

  useEffect(() => {
    if (won) {
      alert(`Congratulations!! You have won the game!`);
      if (user === null) {
        alert(`Represent your score on the global leaderboard by logging in!`);
      }
    }
  }, [won, user]);

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
    if (!isActive && won === false) {
      setIsActive(true);
      setReset(true);
    }
    if (movable(i) !== 0 && won === false) {
      if (movable(i) === 1) {
        verticalChange(i, squares.indexOf("##"));
      } else {
        horizontalChange(i, squares.indexOf("##"));
      }
    }
  };

  return (
    <div
      style={{
        "--bg-color": darkMode ? "rgb(47,47,47)" : "white",
        "--main-color": darkMode ? "white" : "rgb(47,47,47)",
        backgroundColor: "var(--bg-color)",
        color: "var(--main-color)",
      }}
    >
      <h1>Number puzzle!</h1>
      <div className="game">
        <Board
          squares={squares}
          gridSize={gridSize}
          squareClick={handleClick}
        />
        <div className="details">
          <label htmlFor="number">
            <h3 className="grid-size">
              <span className="child-1">Decide grid size:</span>

              <span className="child-1">{gridSize}</span>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                onClick={() => {
                  setGridSize((gr) => gr + 1);
                }}
                style={{
                  color: "var(--main-color)",
                }}
              >
                <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
              </svg>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                onClick={() => {
                  setGridSize((gr) => gr - 1);
                }}
              >
                <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
              </svg>
            </h3>
          </label>
          <div>
            <h3>{won ? "Game won" : "Game not won"}</h3>
          </div>
          <div>
            <input
              id="dark-mode"
              type="checkbox"
              checked={darkMode}
              onChange={(_e) => setDarkMode((val) => !val)}
            />
            <label htmlFor="dark-mode">Enable Dark Mode</label>
          </div>
          <div>
            <button
              className="my-button"
              onClick={() => {
                setSquares((_) => generateInitArray(gridSize));
                setIsActive(false);
                setWon(false);
                setReset(true);
              }}
            >
              Reset board
            </button>
          </div>
          <Timer
            reset={reset}
            setReset={setReset}
            won={won}
            user={user}
            gridSize={gridSize}
            isActive={isActive}
            firebase={firebase}
            firestore={firestore}
          />
          <LeaderboardMenu gridSize={gridSize} />
        </div>
      </div>
    </div>
  );
};

export default Game;
