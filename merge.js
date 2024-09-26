function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, middleIndex));
  const rightArr = mergeSort(arr.slice(middleIndex));

  return merge(leftArr, rightArr);
}

function merge(left, right) {
  const lcopy = left.slice(0);
  const rcopy = right.slice(0);
  const sortedArr = [];

  while (lcopy.length > 0 && rcopy.length > 0) {
    if (lcopy[0] < rcopy[0]) {
      sortedArr.push(lcopy[0]);
      lcopy.splice(0, 1);
    } else {
      sortedArr.push(rcopy[0]);
      rcopy.splice(0, 1);
    }
  }
  return sortedArr.concat(lcopy).concat(rcopy);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
