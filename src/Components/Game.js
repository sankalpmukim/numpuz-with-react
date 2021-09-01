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
  const [squares, setSquares] = useState(generateInitArray(gridSize));
  const [won, setWon] = useState(false);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [{ auth, firestore }] = useStore();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (won && user) {
      console.log(user.uid);
      if (localStorage.getItem(gridSize) !== null) {
        console.log("won");
        if (
          typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] ===
            "undefined" ||
          (typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] !==
            "undefined" &&
            JSON.parse(localStorage.getItem(gridSize))[user.uid] > time)
        ) {
          const data = {
            ...JSON.parse(localStorage.getItem(gridSize)),
          };
          data[user.uid] = time;
          localStorage.setItem(gridSize, JSON.stringify(data));
        }
      } else {
        const data = {};
        data[user.uid] = time;
        localStorage.setItem(gridSize, JSON.stringify(data));
      }
    }
  }, [won, user, time, gridSize]);
  useEffect(() => {
    // console.log("in on change won");
    if (won && user) {
      console.log(user.uid);
      const leaderboardRef = firestore
        .collection(String(gridSize))
        .doc(user.uid);
      leaderboardRef.get().then((doc) => {
        if (!doc.exists) {
          leaderboardRef.set({
            uid: user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            userName: user.displayName,
            photoUrl: user.photoURL,
            score: time,
          });
        } else {
          const { score } = doc.data();
          if (score > time) {
            leaderboardRef.update({
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              score: time,
            });
          }
        }
      });
      if (localStorage.getItem(gridSize) !== null) {
        console.log("won");
        if (
          typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] ===
            "undefined" ||
          (typeof JSON.parse(localStorage.getItem(gridSize))[user.uid] !==
            "undefined" &&
            JSON.parse(localStorage.getItem(gridSize))[user.uid] > time)
        ) {
          const data = {
            ...JSON.parse(localStorage.getItem(gridSize)),
          };
          data[user.uid] = time;
          localStorage.setItem(gridSize, JSON.stringify(data));
        }
      } else {
        const data = {};
        data[user.uid] = time;
        localStorage.setItem(gridSize, JSON.stringify(data));
      }
    }
  }, [won, user, time, gridSize, firestore]);
  useEffect(() => {
    if (gridSize < 2 || gridSize > 10) {
      alert("Gridsize can only be between 2 and 10!");
      setGridSize(4);
    } else {
      setSquares(generateInitArray(gridSize));
      setIsActive(false);
    }
  }, [gridSize]);
  useEffect(() => {
    if (user === null) {
      setSquares(generateInitArray(gridSize));
      setIsActive(false);
      setWon(false);
      setTime(0);
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
      setTime(0);
      setIsActive(false);
      setWon(true);
      return;
    }
    setWon(false);
  }, [squares]);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

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
      setTime(0);
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
    <div>
      <h1>Number puzzle!</h1>
      <div className="game">
        <Board
          squares={squares}
          gridSize={gridSize}
          squareClick={handleClick}
        />
        <div className="details">
          <label htmlFor="number">
            <h3>
              Decide grid size:
              <input
                type="number"
                value={gridSize}
                onChange={(event) => {
                  setSquares(generateInitArray(gridSize));
                  setIsActive(false);
                  setWon(false);
                  setTime(0);
                  setGridSize(Number(event.target.value));
                }}
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
              onClick={() => {
                setSquares(generateInitArray(gridSize));
                setIsActive(false);
                setWon(false);
                setTime(0);
              }}
            >
              Reset board
            </button>
          </div>
          <Timer time={time} />
          <LeaderboardMenu gridSize={gridSize} />
        </div>
      </div>
    </div>
  );
};

export default Game;
