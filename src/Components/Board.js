import "../CSS/Board.css";
import Square from "./Square";
import { useCallback, useEffect, useState } from "react";
import {
  generateInitArray,
  arraysEqual,
  asyncAlert,
  swapArrayElements,
} from "../Context/utils";
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

const Board = ({
  gridSize,
  setGridSize,
  isActive,
  setIsActive,
  won,
  setWon,
  user,
  reset,
  setReset,
}) => {
  const [squares, setSquares] = useState(generateInitArray(gridSize));
  // let squares = props.squares.slice();
  useEffect(() => {
    const newSquares = squares.slice();
    if (newSquares.indexOf("##") === -1) {
      setIsActive(false);
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
  }, [setIsActive, setWon, squares]);

  useEffect(() => {
    if (won && user === null) {
      asyncAlert(
        `Represent your score on the global leaderboard by logging in!`
      );
    }
  }, [won, user]);

  const movable = useCallback(
    (idx) => {
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
    },
    [gridSize, squares]
  );

  const verticalChange = useCallback(
    (idx, mover) => {
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
    },
    [gridSize, squares]
  );

  const horizontalChange = useCallback(
    (idx, mover) => {
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
    },
    [squares]
  );

  const handleClick = useCallback(
    (i) => {
      // console.log(i);
      if (!isActive && won === false) {
        setIsActive(true);
      }
      if (movable(i) !== 0 && won === false) {
        if (movable(i) === 1) {
          verticalChange(i, squares.indexOf("##"));
        } else {
          horizontalChange(i, squares.indexOf("##"));
        }
      }
    },
    [
      horizontalChange,
      isActive,
      movable,
      setIsActive,
      squares,
      verticalChange,
      won,
    ]
  );

  useEffect(() => {
    const leftHandler = () => {
      const newSquares = squares.slice();
      const mainIndex = newSquares.indexOf("##");
      // checking for left edge
      if (mainIndex % gridSize !== 0) {
        handleClick(mainIndex - 1);
      }
    };
    const rightHandler = () => {
      const newSquares = squares.slice();
      const mainIndex = newSquares.indexOf("##");
      console.log(mainIndex);
      // checking for left edge
      if ((mainIndex + 1) % gridSize !== 0) {
        handleClick(mainIndex + 1);
      }
    };
    const upHandler = () => {
      const newSquares = squares.slice();
      const mainIndex = newSquares.indexOf("##");
      console.log(mainIndex);
      // checking for left edge
      if (mainIndex >= gridSize) {
        handleClick(mainIndex - gridSize);
      }
    };
    const downHandler = () => {
      const newSquares = squares.slice();
      const mainIndex = newSquares.indexOf("##");
      console.log(mainIndex);
      // checking for left edge
      if (mainIndex <= gridSize * gridSize - gridSize - 1) {
        handleClick(mainIndex + gridSize);
      }
    };
    const keyEventsCallback = (e) => {
      const callback = {
        ArrowLeft: leftHandler,
        ArrowRight: rightHandler,
        ArrowUp: upHandler,
        ArrowDown: downHandler,
      }[e.code];
      callback?.();
    };
    document.addEventListener("keydown", keyEventsCallback);
    return () => {
      document.removeEventListener("keydown", keyEventsCallback);
    };
  }, [gridSize, handleClick, squares]);
  useEffect(() => {
    if (gridSize < 2 || gridSize > 10) {
      asyncAlert("Gridsize can only be between 2 and 10!");
      setGridSize(4);
    } else {
      setReset(true);
      setSquares((_) => generateInitArray(gridSize));
      setIsActive(false);
    }
  }, [gridSize, setGridSize, setIsActive, setReset]);
  useEffect(() => {
    if (user === null) {
      setSquares((_) => generateInitArray(gridSize));
      setIsActive(false);
      setWon(false);
    }
  }, [user, gridSize, setIsActive, setWon]);

  useEffect(() => {
    if (won && user === null) {
      asyncAlert(
        `Represent your score on the global leaderboard by logging in!`
      );
    }
  }, [won, user]);

  useEffect(() => {
    if (reset) {
      setSquares(generateInitArray(gridSize));
      setReset(false);
    }
  }, [gridSize, reset, setReset]);

  const squareElements = squares.map((_, idx) => (
    <Square
      onClick={() => handleClick(idx)}
      key={squares[idx]}
      value={squares[idx]}
    />
  ));

  return (
    <div className="board" style={{ "--grid-size": gridSize }}>
      {squareElements}
    </div>
  );
};

export default Board;
