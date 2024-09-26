const fibs = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

const fibsRec = (n) => {
  console.log("This was printed recursively");
  //   setup base cases
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  //   build the array recursively
  const arr = fibsRec(n - 1);
  const nextFib = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(nextFib);
  return arr;
};

console.log(fibsRec(8));
