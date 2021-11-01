const generateArray = (gridSize) => {
  const initArray = Array.from({ length: gridSize * gridSize }, (_, index) =>
    String(index + 1)
  );
  // initArray[initArray.length - 1] = String(initArray.length - 1);
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

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const getInvCount = (squares, gridSize) => {
  let invCount = 0;
  for (let i = 0; i < gridSize * gridSize - 1; i++) {
    for (let j = i + 1; j < gridSize * gridSize; j++) {
      if (squares[i] > squares[j] && squares[i] !== 0 && squares[j] !== 0) {
        invCount++;
      }
    }
  }
  return invCount;
};

const findXPosition = (puzzle, gridSize) => {
  for (let i = gridSize - 1; i >= 0; i--) {
    for (let j = gridSize - 1; j >= 0; j--) {
      if (puzzle[i][j] === 0) {
        return gridSize - i;
      }
    }
  }
};

const twoDArray = (squares, gridSize) => {
  let arr = new Array(gridSize);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(gridSize);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = squares[i * gridSize + j];
    }
  }
  return arr;
};

const isSolvable = (squares, gridSize) => {
  squares = squares.map((val) => {
    if (val === "##") return 0;
    else return Number(val);
  });
  // console.log(squares);
  const invCount = getInvCount(squares, gridSize);
  if (gridSize % 2 === 1) {
    console.log("Odd grid:", invCount % 2 === 0);
    return invCount % 2 === 0;
  } else {
    const pos = findXPosition(twoDArray(squares, gridSize), gridSize);
    if (pos % 2 === 1) {
      console.log("Even grid:", invCount % 2 === 0);
      return invCount % 2 === 0;
    } else {
      console.log("Even grid:", invCount % 2 === 1);
      return invCount % 2 === 1;
    }
  }
};

const generateInitArray = (gridSize) => {
  let output = generateArray(gridSize);
  let count = 0;
  while (isSolvable(output, gridSize) === false) {
    count++;
    output = generateArray(gridSize);
  }
  console.log("It took this many re generations", count);
  console.log(output);
  console.trace("generateInitArray");
  return output;
};

export { generateInitArray, swapArrayElements, arraysEqual, isSolvable };
