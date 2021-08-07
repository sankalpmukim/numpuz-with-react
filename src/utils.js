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

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export { generateInitArray, swapArrayElements, arraysEqual };
