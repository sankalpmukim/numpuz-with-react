import React, { useState, useEffect } from "react";
import Board from "./Board";
import Timer from "./Timer";
import LeaderboardMenu from "./LeaderboardMenu";
import "../index.css";
import firebase from "firebase";
import { useStore } from "../Context/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { WinAnimation } from "./WinAnimation";

// const auth = firebase.auth();
const Game = () => {
  const [gridSize, setGridSize] = useState(4);
  const [won, setWon] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetBoard, setResetBoard] = useState(false);
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

  return (
    <>
      {won ? <WinAnimation /> : null}
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
            isActive={isActive}
            setIsActive={setIsActive}
            gridSize={gridSize}
            setWon={setWon}
            setGridSize={setGridSize}
            user={user}
            won={won}
            reset={resetBoard}
            setReset={setResetBoard}
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
                  // setSquares((_) => generateInitArray(gridSize));
                  setIsActive(false);
                  setWon(false);
                  setResetTimer(true);
                  setResetBoard(true);
                }}
              >
                Reset board
              </button>
            </div>
            <Timer
              reset={resetTimer}
              setReset={setResetTimer}
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
    </>
  );
};

export default Game;
